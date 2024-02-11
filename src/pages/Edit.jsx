import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';

import { 
  StarsCanvas,
  Alert
} from "../components";

import { Link } from "react-router-dom";

import { db } from "../firebase-config";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";

const Edit = () => {
    const isMobile = window.innerWidth < 768;

    const user = useContext(UserContext);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const [teamName, setTeamName] = useState('');

    const [nameLead, setNameLead] = useState('');
    const [emailLead, setEmailLead] = useState('');
    const [contactLead, setContactLead] = useState('');
    const [githubLead, setGithubLead] = useState('');
    const [linkedinLead, setLinkedinLead] = useState('');
    const [collegeLead, setCollegeLead] = useState('');

    const [nameMember2, setNameMember2] = useState('');
    const [emailMember2, setEmailMember2] = useState('');
    const [contactMember2, setContactMember2] = useState('');
    const [githubMember2, setGithubMember2] = useState('');
    const [linkedinMember2, setLinkedinMember2] = useState('');
    const [collegeMember2, setCollegeMember2] = useState('');

    const [nameMember3, setNameMember3] = useState('');
    const [emailMember3, setEmailMember3] = useState('');
    const [contactMember3, setContactMember3] = useState('');
    const [githubMember3, setGithubMember3] = useState('');
    const [linkedinMember3, setLinkedinMember3] = useState('');
    const [collegeMember3, setCollegeMember3] = useState('');

    const [member2Exists, setMember2Exists] = useState(false);
    const [member3Exists, setMember3Exists] = useState(false);

    const [memberCount, setMemberCount] = useState(0);

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const contactRegex = /^[0-9]{10}$/;
    const githubLinkedinRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+$/;
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;    
    const collegeRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    var q = query(collection(db, "teams"), where("teamName", "==", teamName));

    const [docRef, setDocRef] = useState(null);

    const getTeamData = async (e) => {
        e.preventDefault();

        if (!user) {
            setAlertMessage('Please login to edit.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        setLoading2(true);
        await getDocs(q).then((querySnapshot) => {
            if (querySnapshot.empty) {
                setLoading2(false);
                setAlertMessage('No such team exists.');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            } else {
                querySnapshot.forEach((doc) => {
                    setDocRef(doc);
                });
            }
        });
    }

    useEffect(() => {
        if (docRef != null && docRef.exists()) {
            const data = docRef.data();
            if(data && user.email == data.emailLead) { 
                setNameLead(data.nameLead);
                setEmailLead(data.emailLead);
                setContactLead(data.contactLead);
                setGithubLead(data.githubLead);
                setLinkedinLead(data.linkedinLead);
                setCollegeLead(data.collegeLead);
                setMemberCount(1);
                if(data.nameMember2 && data.emailMember2 && data.contactMember2 
                    && data.githubMember2 && data.linkedinMember2 && data.collegeMember2) {
                    setNameMember2(data.nameMember2);
                    setEmailMember2(data.emailMember2);
                    setContactMember2(data.contactMember2);
                    setGithubMember2(data.githubMember2);
                    setLinkedinMember2(data.linkedinMember2);
                    setCollegeMember2(data.collegeMember2);
                    setMemberCount(2);
                } else {
                    setMember2Exists(true);
                }
                if(data.nameMember3 && data.emailMember3 && data.contactMember3 
                    && data.githubMember3 && data.linkedinMember3 && data.collegeMember3) {
                    setNameMember3(data.nameMember3);
                    setEmailMember3(data.emailMember3);
                    setContactMember3(data.contactMember3);
                    setGithubMember3(data.githubMember3);
                    setLinkedinMember3(data.linkedinMember3);
                    setCollegeMember3(data.collegeMember3);
                    setMemberCount(3);
                } else {
                    setMember3Exists(true);
                }
                setLoading2(false);
            } else if(data && user.email != data.emailLead) {
                setLoading2(false);
                setAlertMessage('Only lead can edit.');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            }
        } 
    }, [docRef]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setAlertMessage('Please login to edit.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        if(memberCount == 3) {
            if (!nameLead || !emailLead || !contactLead || !githubLead || !linkedinLead || !collegeLead || 
                !nameMember2 || !emailMember2 || !contactMember2 || !githubMember2 || !linkedinMember2 || !collegeMember2 || 
                !nameMember3 || !emailMember3 || !contactMember3 || !githubMember3 || !linkedinMember3 || !collegeMember3) {
                setAlertMessage('Please fill all the fields.');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        } else if(memberCount == 2) {
            if (!nameLead || !emailLead || !contactLead || !githubLead || !linkedinLead || !collegeLead || 
                !nameMember2 || !emailMember2 || !contactMember2 || !githubMember2 || !linkedinMember2 || !collegeMember2) {
                setAlertMessage('Please fill all the fields.');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        } else if(memberCount == 1) {
            if (!nameLead || !emailLead || !contactLead || !githubLead || !linkedinLead || !collegeLead) {
                setAlertMessage('Please fill all the fields.');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }

        if (!nameRegex.test(nameLead)) {
            setAlertMessage('Please enter a valid Name (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!emailRegex.test(emailLead)) {
            setAlertMessage('Please enter a valid Email Address (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!contactRegex.test(contactLead)) {
            setAlertMessage('Please enter a valid Contact Number (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!githubLinkedinRegex.test(githubLead)) {
            setAlertMessage('Please enter a valid GitHub Profile Link (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!linkedinRegex.test(linkedinLead)) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!collegeRegex.test(collegeLead)) {
            setAlertMessage('Please enter a valid College Name (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        if (!nameRegex.test(nameMember2) && memberCount > 1) {
            
            setAlertMessage('Please enter a valid Name (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!emailRegex.test(emailMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid Email Address (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!contactRegex.test(contactMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid Contact Number (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!githubLinkedinRegex.test(githubMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid GitHub Profile Link (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!linkedinRegex.test(linkedinMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!collegeRegex.test(collegeMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid College Name (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        if (!nameRegex.test(nameMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid Name (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!emailRegex.test(emailMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid Email Address (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!contactRegex.test(contactMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid Contact Number (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!githubLinkedinRegex.test(githubMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid GitHub Profile Link (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return; 
        }
        if (!linkedinRegex.test(linkedinMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return; 
        }
        if (!collegeRegex.test(collegeMember2) && memberCount > 2) {
            setAlertMessage('Please enter a valid College Name (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return; 
        }

        if ((nameMember2 || emailMember2 || contactMember2 || 
            githubMember2 || linkedinMember2 || collegeMember2 ||
            nameMember3 || emailMember3 || contactMember3 ||
            githubMember3 || linkedinMember3 || collegeMember3) 
            && memberCount == 1) {
            setAlertMessage('Cannot add new members.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        } else if ((nameMember3 || emailMember3 || contactMember3 ||
            githubMember3 || linkedinMember3 || collegeMember3) && memberCount == 2) {
            setAlertMessage('Cannot add new members.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        setLoading(true);
        try {
            if(memberCount == 3) {
                await updateDoc(docRef.ref, {
                    teamName: teamName,
                    nameLead: nameLead,
                    emailLead: emailLead,
                    contactLead: contactLead,
                    githubLead: githubLead,
                    linkedinLead: linkedinLead,
                    collegeLead: collegeLead,
                    nameMember2: nameMember2,
                    emailMember2: emailMember2,
                    contactMember2: contactMember2,
                    githubMember2: githubMember2,
                    linkedinMember2: linkedinMember2,
                    collegeMember2: collegeMember2,
                    nameMember3: nameMember3,
                    emailMember3: emailMember3,
                    contactMember3: contactMember3,
                    githubMember3: githubMember3,
                    linkedinMember3: linkedinMember3,
                    collegeMember3: collegeMember3
                });
            } else if(memberCount == 2) {
                await updateDoc(docRef.ref, {
                    teamName: teamName,
                    nameLead: nameLead,
                    emailLead: emailLead,
                    contactLead: contactLead,
                    githubLead: githubLead,
                    linkedinLead: linkedinLead,
                    collegeLead: collegeLead,
                    nameMember2: nameMember2,
                    emailMember2: emailMember2,
                    contactMember2: contactMember2,
                    githubMember2: githubMember2,
                    linkedinMember2: linkedinMember2,
                    collegeMember2: collegeMember2
                });
            } else if(memberCount == 1) {
                await updateDoc(docRef.ref, {
                    teamName: teamName,
                    nameLead: nameLead,
                    emailLead: emailLead,
                    contactLead: contactLead,
                    githubLead: githubLead,
                    linkedinLead: linkedinLead,
                    collegeLead: collegeLead
                });
            } 
            setLoading(false);
            setAlertMessage('Edited Successfully.');
            setAlertType('success');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        } catch (error) {
            setLoading(false);
            setAlertMessage(error.message);
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
    }

    return (
        <section className='relative z-0 bg-black overflow-x-hidden'>
            <div className="fixed bg-primary w-full top-0 z-10">
                {showAlert && <Alert message={alertMessage} type={alertType} />}
            </div>
            <div className={`${isMobile ? 'p-5' : 'p-10'}`} >
                <div className='flex flex-row'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 cursor-pointer mt-1" 
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
                    <h1 className="mb-8 ml-2.5 font-bold text-4xl">Edit Registration</h1>
                </div>
                <div className="flex justify-center px-2.5">
                    <input 
                        className="w-full text-xl px-4 py-2 border border-solid border-orange-600 mr-5 rounded-xl mb-3" 
                        type="text" 
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)} 
                        placeholder="Team Name" />
                    <button
                        onClick={getTeamData}
                        className="bg-white font-bold h-full px-4 py-2.5 text-orange-600 hover:bg-orange-800 uppercase rounded-xl text-lg">
                        {loading2 ? 
                            <svg 
                                aria-hidden="true" 
                                className="w-8 h-6 animate-spin fill-white" 
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
                                    fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
                                    fill="currentFill"/>
                            </svg> 
                            : 'Search'
                        }
                    </button>
                </div>
                <div>
                    <form className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 bg-blur'>
                            <legend className='text-2xl font-bold px-2'>Member 1</legend>
                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={nameLead}
                                onChange={(e) => setNameLead(e.target.value)} 
                                required 
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={emailLead}
                                onChange={(e) => setEmailLead(e.target.value)}
                                required 
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={contactLead}
                                onChange={(e) => setContactLead(e.target.value)}  
                                required 
                                placeholder="Contact No." />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={githubLead}
                                onChange={(e) => setGithubLead(e.target.value)}  
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={linkedinLead}
                                onChange={(e) => setLinkedinLead(e.target.value)} 
                                required 
                                placeholder="LinkedIn Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={collegeLead}
                                onChange={(e) => setCollegeLead(e.target.value)} 
                                required 
                                placeholder="College Name" />
                        </fieldset>
                        
                        <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 flex-1 bg-blur'>
                            <legend className='text-2xl font-bold px-2'>Member 2</legend>
                            <p className={`${member2Exists == true ? 'block' : 'hidden'} text-red-500 text-lg font-bold my-3`}>Member 2 dosen't exists</p>
                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={nameMember2}
                                onChange={(e) => setNameMember2(e.target.value)} 
                                required 
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={emailMember2}
                                onChange={(e) => setEmailMember2(e.target.value)}  
                                required 
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={contactMember2}
                                onChange={(e) => setContactMember2(e.target.value)}  
                                required 
                                placeholder="Contact No." />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={githubMember2}
                                onChange={(e) => setGithubMember2(e.target.value)}
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={linkedinMember2}
                                onChange={(e) => setLinkedinMember2(e.target.value)} 
                                required 
                                placeholder="LinkedIn Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={collegeMember2}
                                onChange={(e) => setCollegeMember2(e.target.value)}  
                                required 
                                placeholder="College Name" />
                        </fieldset>

                        <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 flex-1 bg-blur'>
                            <legend className='text-2xl font-bold px-2'>Member 3</legend>
                            <p className={`${member3Exists == true ? 'block' : 'hidden'} text-red-500 text-lg font-bold my-3`}>Member 3 dosen't exists</p>
                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={nameMember3}
                                onChange={(e) => setNameMember3(e.target.value)} 
                                required
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={emailMember3}
                                onChange={(e) => setEmailMember3(e.target.value)}  
                                required 
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text" 
                                value={contactMember3}
                                onChange={(e) => setCollegeMember3(e.target.value)}  
                                required 
                                placeholder="Contact No." />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={githubMember3}
                                onChange={(e) => setGithubMember3(e.target.value)}
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={linkedinMember3}
                                onChange={(e) => setLinkedinMember3(e.target.value)}
                                required 
                                placeholder="LinkedIn Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                type="text"
                                value={collegeMember3}
                                onChange={(e) => setCollegeMember3(e.target.value)}  
                                required 
                                placeholder="College Name" />
                        </fieldset>
                        <aside className='border border-orange-600 rounded-2xl p-3 mt-[26px] mx-2 mb-3 flex-1'>
                            <div className="bg-blur rounded-2xl h-full p-4">
                                <h2 className="font-bold text-3xl">Instructions</h2>
                                <ul className="list-disc mt-4 list-inside text-lg">
                                    <li>Only the lead can edit the details.</li>
                                    <li>Ensure that the your email and the one you used for logging in are both same.</li>
                                    <li>New members cannot be added here only details of existing members can be altered.</li>
                                    <li>Linkedin Link : linkedin.com/in/profile-id</li>
                                    <li>GitHub Link : github.com/username</li>
                                </ul>
                            </div>
                        </aside>
                        <div className="flex justify-center text-center md:text-left font-bold">
                            <button 
                                className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-orange-600 hover:bg-orange-800 px-4 py-2 text-white font-bold uppercase rounded-xl`} 
                                type="submit"
                                style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                onClick={onSubmit}>
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
                                : 'Save Changes'}
                            </button>
                        </div>
                        <div className="flex justify-center text-center md:text-left font-bold">
                            <Link
                                to="/register"
                                className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-white px-4 py-2 text-orange-600 uppercase rounded-xl`} 
                                style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                Fill Form
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
          {!isMobile && <StarsCanvas />}  
        </section>
    );
};

export default Edit;
