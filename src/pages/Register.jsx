import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

import { 
  StarsCanvas,
  Alert
} from "../components";

import { Link } from 'react-router-dom';

import { db, storage } from "../firebase-config";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, getDocs, query, where } from "firebase/firestore";

const Register = () => {
    const isMobile = window.innerWidth < 768;

    const navigate = useNavigate();

    const user = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const [nameMember, setNameMember] = useState('');
    const [contactMember, setContactMember] = useState('');
    const [githubMember, setGithubMember] = useState('');
    const [linkedinMember, setLinkedinMember] = useState('');
    const [collegeMember, setCollegeMember] = useState('');

    const [resumeFile, setResumeFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const [teamName, setTeamName] = useState('');

    const [loading, setLoading] = useState(false);

    const nameRegex = /^\s*[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*\s*$/;
    const emailRegex = /^\s*[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\s*$/;
    const contactRegex = /^\s*[0-9]{10}\s*$/;
    const githubLinkedinRegex = /^\s*(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\s*$/;
    const linkedinRegex = /^\s*(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\s*$/;    
    const collegeRegex = /^\s*[a-zA-Z]+(([',. -][a-zA-Z. ])?[a-zA-Z]*)*\s*$/;
    const teamRegex = /^\s*[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*\s*$/;

    var q = query(collection(db, "teams"), where("teamName", "==", teamName.trim()));
    var querySnapshot = null;
    var docRef = null;

    const [isRegistered, setIsRegistered] = useState(false);

    const [membersExists, setMembersExists] = useState(false);
    const [memberCount, setMemberCount] = useState(0);

    if(user) {
        const checkUserRegistered = async () => {
          var q1 = query(collection(db, "teams"), where("emailLead", "==", user.email));
          var q2 = query(collection(db, "teams"), where("emailMember2", "==", user.email));
          var q3 = query(collection(db, "teams"), where("emailMember3", "==", user.email));
      
          const [querySnapshot1, querySnapshot2, querySnapshot3] = await Promise.all([
            getDocs(q1),
            getDocs(q2),
            getDocs(q3)
          ]);
      
          if (querySnapshot1.empty && querySnapshot2.empty && querySnapshot3.empty) {
            setIsRegistered(false);
          } else {
            setIsRegistered(true);
          }
        }
    
        checkUserRegistered();
    }

    useEffect(() => {
        checkIfMemberExists();
    }, [teamName]);

    const checkIfMemberExists = async () => {
        querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                docRef = doc;
            });
            if(docRef.exists()) {
                const data = docRef.data();
                if(data) {
                    if (data.nameLead != null &&
                        data.nameMember2 != null &&
                        data.nameMember3 != null) {
                        setMembersExists(true);
                        setMemberCount(3);
                    } if (data.nameLead != null &&
                        data.nameMember2 != null &&
                        data.nameMember3 == null) {
                        setMembersExists(true);
                        setMemberCount(2);
                    } if (data.nameLead != null &&
                        data.nameMember2 == null &&
                        data.nameMember3 == null) {
                        setMembersExists(true);
                        setMemberCount(1);
                    }
                }
            }
        } else {
            setMembersExists(false);
        }
    }

    const uploadResume = async () => { 
        setLoading(true);

        if (resumeFile) {
            try {
                setAlertMessage('Uploading Resume...');
                setAlertType('op');
                setShowAlert(true);
                const resumeRef = ref(storage, `resumes/${Date.now() + '-' + resumeFile.name}`);
                await uploadBytes(resumeRef, resumeFile);
                await getDownloadURL(resumeRef).then((url) => {
                    setShowAlert(false);
                    uploadImage(url);
                });
            } catch (error) {
                setLoading(false);
                setAlertMessage(error.message);
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }
    }

    const uploadImage = async (resumeUrl) => {
        if (imageFile) {
            try {
                setAlertMessage('Uploading Image...');
                setAlertType('op');
                setShowAlert(true);
                const imageRef = ref(storage, `images/${Date.now() + '-' + imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                await getDownloadURL(imageRef).then((url) => {
                    setShowAlert(false);
                    saveToDB(resumeUrl, url);
                });
            } catch (error) {
                setLoading(false);
                setAlertMessage(error.message);
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }
    }

    const saveToDB = async (resumeUrl, imageUrl) => {
        if(resumeUrl && imageUrl) {
            querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                await addDoc(collection(db, "teams"), {
                    teamName: teamName.trim(),
                    nameLead: nameMember.trim(),
                    emailLead: user.email,
                    contactLead: contactMember.trim(),
                    resumeLead: resumeUrl,
                    imageLead: imageUrl,
                    githubLead: githubMember.trim(),
                    linkedinLead: linkedinMember.trim(),
                    collegeLead: collegeMember.trim()
                });
                setLoading(false);
                setAlertMessage('Registered Successfully.');
                setAlertType('success');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                    navigate('/');
                }, 2000);
                return;
            } else {
                querySnapshot.forEach((doc) => {
                    docRef = doc;
                });

                if(docRef.exists()) {
                    const data = docRef.data();
                    if(data) {
                        if (data.teamName === teamName) {
                            if (data.nameLead != null &&
                            data.nameMember2 != null &&
                            data.nameMember3 != null) {
                                setLoading(false);
                                setAlertMessage('Team already has all 3 members.');
                                setAlertType('error');
                                setShowAlert(true);
                                setTimeout(() => {
                                    setShowAlert(false);
                                }, 2000);
                                return;
                            } if (data.nameLead != null &&
                            data.nameMember2 != null &&
                            data.nameMember3 == null) {
                                updateDoc(docRef.ref, {
                                    teamName: teamName.trim(),
                                    nameLead: data.nameLead,
                                    emailLead: data.emailLead,
                                    contactLead: data.contactLead,
                                    resumeLead: data.resumeLead,
                                    imageLead: data.imageLead,
                                    githubLead: data.githubLead,
                                    linkedinLead: data.linkedinLead,
                                    collegeLead: data.collegeLead,
                                    nameMember2: data.nameMember2,
                                    emailMember2: data.emailMember2,
                                    contactMember2: data.contactMember2,
                                    resumeMember2: data.resumeMember2,
                                    imageMember2: data.imageMember2,
                                    githubMember2: data.githubMember2,
                                    linkedinMember2: data.linkedinMember2,
                                    collegeMember2: data.collegeMember2,
                                    nameMember3: nameMember.trim(),
                                    emailMember3: user.email,
                                    contactMember3: contactMember.trim(),
                                    resumeMember3: resumeUrl,
                                    imageMember3: imageUrl,
                                    githubMember3: githubMember.trim(),
                                    linkedinMember3: linkedinMember.trim(),
                                    collegeMember3: collegeMember.trim()
                                });
                                setLoading(false);
                                setAlertMessage('Registered Successfully.');
                                setAlertType('success');
                                setShowAlert(true);
                                setTimeout(() => {
                                    setShowAlert(false);
                                    navigate('/');
                                }, 2000);
                                return;
                            } if (data.nameLead != null &&
                                data.nameMember2 == null &&
                                data.nameMember3 == null) {
                                updateDoc(docRef.ref, {
                                    teamName: teamName.trim(),
                                    nameLead: data.nameLead,
                                    emailLead: data.emailLead,
                                    contactLead: data.contactLead,
                                    resumeLead: data.resumeLead,
                                    imageLead: data.imageLead,
                                    githubLead: data.githubLead,
                                    linkedinLead: data.linkedinLead,
                                    collegeLead: data.collegeLead,
                                    nameMember2: nameMember.trim(),
                                    emailMember2: user.email,
                                    contactMember2: contactMember.trim(),
                                    resumeMember2: resumeUrl,
                                    imageMember2: imageUrl,
                                    githubMember2: githubMember.trim(),
                                    linkedinMember2: linkedinMember.trim(),
                                    collegeMember2: collegeMember.trim()
                                });
                                setLoading(false);
                                setAlertMessage('Registered Successfully.');
                                setAlertType('success');
                                setShowAlert(true);
                                setTimeout(() => {
                                    setShowAlert(false);
                                    navigate('/');
                                }, 2000);
                                return;
                            }
                        }
                    }
                } 
            }
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setAlertMessage('Please login to register.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        if(!teamRegex.test(teamName) || !teamName) {
            setAlertMessage('Please enter a valid Team Name.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!nameRegex.test(nameMember) || !nameMember) {
            setAlertMessage('Please enter a valid Name.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!emailRegex.test(user.email)) {
            setAlertMessage('Please enter a valid Email Address.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!contactRegex.test(contactMember) || !contactMember) {
            setAlertMessage('Please enter a valid Contact Number.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!githubLinkedinRegex.test(githubMember) || !githubMember) {
            setAlertMessage('Please enter a valid GitHub Profile Link.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!linkedinRegex.test(linkedinMember) || !linkedinMember) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!collegeRegex.test(collegeMember) || !collegeMember) {
            setAlertMessage('Please enter a valid College Name.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if(!resumeFile) {
            setAlertMessage('Please upload your Resume.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (resumeFile.size > 100 * 1024) {
          setLoading(false);
          setAlertMessage("Resume file size exceeds the limit (100KB).");
          setAlertType("error");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
          return;
        }
        if(!imageFile) {
            setAlertMessage('Please upload your Image.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (imageFile.size > 100 * 1024) {
          setLoading(false);
          setAlertMessage("Image file size exceeds the limit (100KB).");
          setAlertType("error");
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
          return;
        }

        if(!loading) {
            uploadResume();
        }
    }

    const showEndAlert = () => {
        setAlertMessage('Registration has been closed.');
        setAlertType('error');
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }
    
    return (
        <section className='relative z-0 bg-black overflow-x-hidden h-[100vh]'>
            <div className="fixed bg-primary w-full top-0 z-10">
                {showAlert && <Alert message={alertMessage} type={alertType} />}
            </div>
            <div className={`${isMobile ? 'p-5' : 'p-10'}`} >
                <div className='flex flex-row mb-8 items-center'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 cursor-pointer" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        onClick={() => window.history.back()}>
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <p className="ml-2.5 font-bold text-4xl">Registration Form</p>
                </div>
                <div>
                    <form className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 bg-blur'>
                            <p className={`${membersExists == true ? 'block' : 'hidden'} text-green-500 text-lg font-bold my-3`}>{memberCount} member/s already registered.</p>
                            <legend className='text-2xl font-bold px-2'>Member</legend>
                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={teamName}
                                onChange={(e) => {
                                    setTeamName(e.target.value);
                                }}
                                required 
                                placeholder="Team Name" />

                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                value={nameMember}
                                onChange={(e) => setNameMember(e.target.value)} 
                                required 
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text"
                                value={user ? user.email : ''}
                                onChange={(e) => setEmailMember(e.target.value)}
                                required 
                                readOnly
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                value={contactMember}
                                onChange={(e) => setContactMember(e.target.value)}  
                                required 
                                placeholder="Contact No." />

                            <div className="flex justify-between">
                                <label
                                    className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                    htmlFor="resumeFile">
                                    {resumeFile ? 'Resume : ' + resumeFile.name : 'Click to select your Resume'}
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    accept=".pdf"
                                    id='resumeFile'
                                    onChange={(e) => setResumeFile(e.target.files[0])}
                                    required />
                            </div>

                            <div className="flex justify-between">
                                <label
                                    className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                    htmlFor="imageFile">
                                    {imageFile ? 'Image : ' + imageFile.name : 'Click to select your Image'}
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    accept="image/*"
                                    id='imageFile'
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                    required />
                            </div>

                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                value={githubMember}
                                onChange={(e) => setGithubMember(e.target.value)}  
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                value={linkedinMember}
                                onChange={(e) => setLinkedinMember(e.target.value)} 
                                required 
                                placeholder="LinkedIn Profile" />

                            <input 
                                className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                value={collegeMember}
                                onChange={(e) => setCollegeMember(e.target.value)} 
                                required 
                                placeholder="College Name" />
                        </fieldset>

                        <aside className='border border-orange-600 rounded-2xl p-3 mt-[26px] mx-3 mb-3 flex-1'>
                            <div className="bg-blur rounded-2xl h-full p-4">
                                <h2 className="font-bold text-3xl text-red-600">Instructions</h2>
                                <ul className="list-disc mt-4 list-inside text-xl">
                                    <li className='font-bold'>Each member has to register individually.</li>
                                    <li>Use existing team name to register yourself as a part of existing team (team name is case & space sensitive).</li>
                                    <li>Choose a new team name to create a new team and share that team name with your team mates so that they can become part of your team.</li>
                                    <li>Member to register first is automatically the lead of the team.</li>
                                    <li>Each team can only have three members.</li>
                                    <li>Upload your Resume in .pdf or .docx ({'<'}100 kb)</li>
                                    <li>Upload your Image in any image format ({'<'}100 kb)</li>
                                    <li>LinkedIn Link : linkedin.com/in/profile-id</li>
                                    <li>GitHub Link : github.com/username</li>
                                    <li>Join this Whatsapp Group to solve your doubts : <a href='https://chat.whatsapp.com/KEK3nEVvZzu1yXXvTO5ySS' className='text-blue-600'>Click to Join</a></li>
                                </ul>
                            </div>
                        </aside>

                        <div className="flex justify-center text-center md:text-left font-bold">
                            {isRegistered ?
                                <Link
                                    to="/edit"
                                    className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-orange-600 px-4 py-2 text-white uppercase rounded-xl`} 
                                    style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Already Registered
                                </Link> 
                                : user ? 
                                    <button 
                                        className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-orange-600 hover:bg-orange-800 px-4 py-2 text-white uppercase rounded-xl`} 
                                        type="submit"
                                        style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                        onClick={showEndAlert}>
                                    {loading ? 
                                    <svg 
                                        aria-hidden="true" 
                                        className="w-8 h-6 text-white animate-spin fill-orange-600" 
                                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
                                            fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
                                            fill="currentFill"/>
                                    </svg> 
                                    : 'Registration Ended'}
                                </button> : 
                                <Link
                                    to="/signin"
                                    className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-white px-4 py-2 text-orange-600 uppercase rounded-xl`} 
                                    style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Login to Register
                                </Link>
                            }
                        </div>

                        {
                            isRegistered ? 
                            <div className="flex justify-center text-center md:text-left font-bold">
                                <Link
                                    to="/edit"
                                    className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-white px-4 py-2 text-orange-600 uppercase rounded-xl`} 
                                    style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Edit Form
                                </Link>
                            </div> : ''
                        }
                    </form>
                </div>
            </div>
            {!isMobile && <StarsCanvas />}   
        </section>
    );
};

export default Register;
