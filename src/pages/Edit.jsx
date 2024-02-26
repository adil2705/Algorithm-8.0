import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';

import { 
  StarsCanvas,
  Alert
} from "../components";

import { Link } from "react-router-dom";

import { db, storage } from "../firebase-config";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { insta, youtube } from '../assets/images';

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
    const [resumeLead, setResumeLead] = useState('');
    const [resumeLinkLead, setResumeLinkLead] = useState('');
    const [imageLead, setImageLead] = useState('');
    const [imageLinkLead, setImageLinkLead] = useState('');
    const [githubLead, setGithubLead] = useState('');
    const [linkedinLead, setLinkedinLead] = useState('');
    const [collegeLead, setCollegeLead] = useState('');

    const [nameMember2, setNameMember2] = useState('');
    const [emailMember2, setEmailMember2] = useState('');
    const [contactMember2, setContactMember2] = useState('');
    const [resumeMember2, setResumeMember2] = useState('');
    const [resumeLinkMember2, setResumeLinkMember2] = useState('');
    const [imageMember2, setImageMember2] = useState('');
    const [imageLinkMember2, setImageLinkMember2] = useState('');
    const [githubMember2, setGithubMember2] = useState('');
    const [linkedinMember2, setLinkedinMember2] = useState('');
    const [collegeMember2, setCollegeMember2] = useState('');

    const [nameMember3, setNameMember3] = useState('');
    const [emailMember3, setEmailMember3] = useState('');
    const [contactMember3, setContactMember3] = useState('');
    const [resumeMember3, setResumeMember3] = useState('');
    const [resumeLinkMember3, setResumeLinkMember3] = useState('');
    const [imageMember3, setImageMember3] = useState('');
    const [imageLinkMember3, setImageLinkMember3] = useState('');
    const [githubMember3, setGithubMember3] = useState('');
    const [linkedinMember3, setLinkedinMember3] = useState('');
    const [collegeMember3, setCollegeMember3] = useState('');

    const [member2Exists, setMember2Exists] = useState(false);
    const [member3Exists, setMember3Exists] = useState(false);

    const [memberCount, setMemberCount] = useState(0);

    const [loading, setLoading] = useState(false);

    const [isLead, setIsLead] = useState(false);

    const [isRegistered, setIsRegistered] = useState(false);

    const [dataFetched, setDataFetched] = useState(false);

    const nameRegex = /^\s*[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*\s*$/;
    const emailRegex = /^\s*[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\s*$/;
    const contactRegex = /^\s*[0-9]{10}\s*$/;
    const githubLinkedinRegex = /^\s*(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\s*$/;
    const linkedinRegex = /^\s*(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\s*$/;    
    const collegeRegex = /^\s*[a-zA-Z]+(([',. -][a-zA-Z. ])?[a-zA-Z]*)*\s*$/;
    const teamRegex = /^\s*[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*\s*$/;

    const [docRef, setDocRef] = useState(null);

    if(user && !dataFetched) {
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
                setDocRef(querySnapshot1.docs[0]);
                setData();
            }
        }
    
        checkUserRegistered();
    } 

    const setData = async () => {
        if (docRef != null && docRef.exists()) {
            const data = docRef.data();
            if(data && user.email == data.emailLead) { 
                setDataFetched(true);
                setIsLead(true); 
                setTeamName(data.teamName);
                setNameLead(data.nameLead);
                setEmailLead(data.emailLead);
                setContactLead(data.contactLead);
                setGithubLead(data.githubLead);
                setImageLinkLead(data.imageLead);
                setResumeLinkLead(data.resumeLead);
                setLinkedinLead(data.linkedinLead);
                setCollegeLead(data.collegeLead);
                setMemberCount(1);
                if(data.nameMember2 && data.emailMember2 && data.contactMember2 
                    && data.githubMember2 && data.linkedinMember2 && data.collegeMember2) {
                    setNameMember2(data.nameMember2);
                    setEmailMember2(data.emailMember2);
                    setContactMember2(data.contactMember2);
                    setImageLinkMember2(data.imageMember2);
                    setResumeLinkMember2(data.resumeMember2);
                    setGithubMember2(data.githubMember2);
                    setLinkedinMember2(data.linkedinMember2);
                    setCollegeMember2(data.collegeMember2);
                    setMember2Exists(true);
                    setMemberCount(2);
                } else {
                    setMember2Exists(false);
                }
                if(data.nameMember3 && data.emailMember3 && data.contactMember3 
                    && data.githubMember3 && data.linkedinMember3 && data.collegeMember3) {
                    setNameMember3(data.nameMember3);
                    setEmailMember3(data.emailMember3);
                    setContactMember3(data.contactMember3);
                    setImageLinkMember3(data.imageMember3);
                    setResumeLinkMember3(data.resumeMember3);
                    setGithubMember3(data.githubMember3);
                    setLinkedinMember3(data.linkedinMember3);
                    setCollegeMember3(data.collegeMember3);
                    setMember3Exists(true);
                    setMemberCount(3);
                } else {
                    setMember3Exists(false);
                }
            } else if(data && user.email != data.emailLead) {
                setAlertMessage('Only lead can edit.');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            } else {
                setIsLead(false);
            }
        } 
    }

    const uploadResumeLead = async () => {    
        setLoading(true);
        if (resumeLead && resumeLinkLead == '') {
            try {
                setAlertMessage('Uploading Resume (Lead)...');
                setAlertType('op');
                setShowAlert(true);
                const resumeRef = ref(storage, `resumes/${Date.now() + '-' + resumeLead.name}`);
                await uploadBytes(resumeRef, resumeLead);
                await getDownloadURL(resumeRef).then((url) => {
                    setShowAlert(false);
                    uploadImageLead(url);
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
        } else {
            uploadImageLead('');
        }
    }

    const uploadImageLead = async (resumeLeadUrl) => {
        if (imageLead && imageLinkLead == '') {
            try {
                setAlertMessage('Uploading Image (Lead)...');
                setAlertType('op');
                setShowAlert(true);
                const imageRef = ref(storage, `images/${Date.now() + '-' + imageLead.name}`);
                await uploadBytes(imageRef, imageLead);
                await getDownloadURL(imageRef).then((url) => {
                    setShowAlert(false);
                    uploadResumeMember2(resumeLeadUrl, url);
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
        } else {
            uploadResumeMember2(resumeLeadUrl, '');
        }
    }

    const uploadResumeMember2 = async (resumeLeadUrl, imageLeadUrl) => {    
        if (resumeMember2 && resumeLinkMember2 == '') {
            try {
                setAlertMessage('Uploading Resume (Member 2)...');
                setAlertType('op');
                setShowAlert(true);
                const resumeRef = ref(storage, `resumes/${Date.now() + '-' + resumeMember2.name}`);
                await uploadBytes(resumeRef, resumeMember2);
                await getDownloadURL(resumeRef).then((url) => {
                    setShowAlert(false);
                    uploadImageMember2(resumeLeadUrl, imageLeadUrl, url);
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
        } else {
            uploadImageMember2(resumeLeadUrl, imageLeadUrl, '');
        }
    }

    const uploadImageMember2 = async (resumeLeadUrl, imageLeadUrl, resumeMember2Url) => {
        if (imageMember2 && imageLinkMember2 == '') {
            try {
                setAlertMessage('Uploading Image (Member 2)...');
                setAlertType('op');
                setShowAlert(true);
                const imageRef = ref(storage, `images/${Date.now() + '-' + imageMember2.name}`);
                await uploadBytes(imageRef, imageMember2);
                await getDownloadURL(imageRef).then((url) => {
                    setShowAlert(false);
                    uploadResumeMember3(resumeLeadUrl, imageLeadUrl, resumeMember2Url, url);
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
        } else {
            uploadResumeMember3(resumeLeadUrl, imageLeadUrl, resumeMember2Url, '');
        }
    }

    const uploadResumeMember3 = async (resumeLeadUrl, imageLeadUrl, resumeMember2Url, imageMember2Url) => {    
        setLoading(true);
        if (resumeMember3 && resumeLinkMember3 == '') {
            try {
                setAlertMessage('Uploading Resume (Member 3)...');
                setAlertType('op');
                setShowAlert(true);
                const resumeRef = ref(storage, `resumes/${Date.now() + '-' + resumeMember3.name}`);
                await uploadBytes(resumeRef, resumeMember3);
                await getDownloadURL(resumeRef).then((url) => {
                    setShowAlert(false);
                    uploadImageMember3(resumeLeadUrl, imageLeadUrl, resumeMember2Url, imageMember2Url, url);
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
        } else {
            uploadImageMember3(resumeLeadUrl, imageLeadUrl, resumeMember2Url, imageMember2Url, '');
        }
    }

    const uploadImageMember3 = async (resumeLeadUrl, imageLeadUrl, resumeMember2Url, imageMember2Url, resumeMember3Url) => {
        if (imageMember3 && imageLinkMember3 == '') {
            try {
                setAlertMessage('Uploading Image (Member 3)...');
                setAlertType('op');
                setShowAlert(true);
                const imageRef = ref(storage, `images/${Date.now() + '-' + imageMember3.name}`);
                await uploadBytes(imageRef, imageMember3);
                await getDownloadURL(imageRef).then((url) => {
                    setShowAlert(false);
                    saveToDB(resumeLeadUrl, imageLeadUrl, resumeMember2Url, imageMember2Url, resumeMember3Url, url);
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
        } else {
            saveToDB(resumeLeadUrl, imageLeadUrl, resumeMember2Url, imageMember2Url, resumeMember3Url, '');
        }
    }

    const saveToDB = async (
        resumeLeadUrl, 
        imageLeadUrl, 
        resumeMember2Url, 
        imageMember2Url, 
        resumeMember3Url, 
        imageMember3Url
    ) => {
        try {
            if(memberCount == 3) {
                await updateDoc(docRef.ref, {
                    teamName: teamName.trim(),
                    nameLead: nameLead.trim(),
                    emailLead: emailLead.trim(),
                    contactLead: contactLead.trim(),
                    resumeLead: resumeLeadUrl != '' ? resumeLeadUrl : resumeLinkLead,
                    imageLead: imageLeadUrl != '' ? imageLeadUrl : imageLinkLead,
                    githubLead: githubLead.trim(),
                    linkedinLead: linkedinLead.trim(),
                    collegeLead: collegeLead.trim(),
                    nameMember2: nameMember2.trim(),
                    emailMember2: emailMember2.trim(),
                    contactMember2: contactMember2.trim(),
                    resumeMember2: resumeMember2Url != '' ? resumeMember2Url : resumeLinkMember2,
                    imageMember2: imageMember2Url != '' ? imageMember2Url : imageLinkMember2,
                    githubMember2: githubMember2.trim(),
                    linkedinMember2: linkedinMember2.trim(),
                    collegeMember2: collegeMember2.trim(),
                    nameMember3: nameMember3.trim(),
                    emailMember3: emailMember3.trim(),
                    contactMember3: contactMember3.trim(),
                    resumeMember3: resumeMember3Url != '' ? resumeMember3Url : resumeLinkMember3,
                    imageMember3: imageMember3Url != '' ? imageMember3Url : imageLinkMember3,
                    githubMember3: githubMember3.trim(),
                    linkedinMember3: linkedinMember3.trim(),
                    collegeMember3: collegeMember3.trim()
                });
            } else if(memberCount == 2) {
                await updateDoc(docRef.ref, {
                    teamName: teamName.trim(),
                    nameLead: nameLead.trim(),
                    emailLead: emailLead.trim(),
                    resumeLead: resumeLeadUrl != '' ? resumeLeadUrl : resumeLinkLead,
                    imageLead: imageLeadUrl != '' ? imageLeadUrl : imageLinkLead,
                    contactLead: contactLead.trim(),
                    githubLead: githubLead.trim(),
                    linkedinLead: linkedinLead.trim(),
                    collegeLead: collegeLead.trim(),
                    nameMember2: nameMember2.trim(),
                    emailMember2: emailMember2.trim(),
                    contactMember2: contactMember2.trim(),
                    resumeMember2: resumeMember2Url != '' ? resumeMember2Url : resumeLinkMember2,
                    imageMember2: imageMember2Url != '' ? imageMember2Url : imageLinkMember2,
                    githubMember2: githubMember2.trim(),
                    linkedinMember2: linkedinMember2.trim(),
                    collegeMember2: collegeMember2.trim()
                });
            } else if(memberCount == 1) {
                await updateDoc(docRef.ref, {
                    teamName: teamName.trim(),
                    nameLead: nameLead.trim(),
                    emailLead: emailLead.trim(),
                    contactLead: contactLead.trim(),
                    resumeLead: resumeLeadUrl != '' ? resumeLeadUrl : resumeLinkLead,
                    imageLead: imageLeadUrl != '' ? imageLeadUrl : imageLinkLead,
                    githubLead: githubLead.trim(),
                    linkedinLead: linkedinLead.trim(),
                    collegeLead: collegeLead.trim()
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

        if(!teamRegex.test(teamName) || !teamName) {
            setAlertMessage('Please enter a valid Team Name.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!nameRegex.test(nameLead) || !nameLead) {
            setAlertMessage('Please enter a valid Name (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!emailRegex.test(emailLead) || !emailLead) {
            setAlertMessage('Please enter a valid Email Address (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!contactRegex.test(contactLead) || !contactLead) {
            setAlertMessage('Please enter a valid Contact Number (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!githubLinkedinRegex.test(githubLead) || !githubLead) {
            setAlertMessage('Please enter a valid GitHub Profile Link (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!linkedinRegex.test(linkedinLead) || !linkedinLead) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if (!collegeRegex.test(collegeLead) || !collegeLead) {
            setAlertMessage('Please enter a valid College Name (Lead).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if(resumeLinkLead == '') {
            if(!resumeLead) {
                setAlertMessage('Please upload your Resume (Lead).');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
            if (resumeLead.size > 100 * 1024) {
                setLoading(false);
                setAlertMessage("Resume file size exceeds the limit (100KB) (Lead).");
                setAlertType("error");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }
        if(imageLinkLead == '') {
            if(!imageLead) {
                setAlertMessage('Please upload your Image (Lead).');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
            if (imageLead.size > 100 * 1024) {
                setLoading(false);
                setAlertMessage("Image file size exceeds the limit (100KB) (Lead).");
                setAlertType("error");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }

        if ((!nameRegex.test(nameMember2) || !nameMember2) && memberCount > 1 ) {
            setAlertMessage('Please enter a valid Name (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!emailRegex.test(emailMember2) || !emailMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid Email Address (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!contactRegex.test(contactMember2) || !contactMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid Contact Number (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!githubLinkedinRegex.test(githubMember2) || !githubMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid GitHub Profile Link (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!linkedinRegex.test(linkedinMember2) || !linkedinMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!collegeRegex.test(collegeMember2) || !collegeMember2) && memberCount > 1) {
            setAlertMessage('Please enter a valid College Name (Member 2).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if(resumeLinkMember2 == '' && memberCount > 1) {
            if(!resumeMember2) {
                setAlertMessage('Please upload the Resume (Member 2).');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
            if (resumeMember2.size > 100 * 1024) {
                setLoading(false);
                setAlertMessage("Resume file size exceeds the limit (100KB) (Member 2).");
                setAlertType("error");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }
        if(imageLinkMember2 == '' && memberCount > 1) {
            if(!imageMember2) {
                setAlertMessage('Please upload the Image (Member 2).');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
            if (imageMember2.size > 100 * 1024) {
                setLoading(false);
                setAlertMessage("Image file size exceeds the limit (100KB) (Member 2).");
                setAlertType("error");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }

        if ((!nameRegex.test(nameMember3) || !nameMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid Name (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!emailRegex.test(emailMember3) || !emailMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid Email Address (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!contactRegex.test(contactMember3) || !contactMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid Contact Number (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }
        if ((!githubLinkedinRegex.test(githubMember3) || !githubMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid GitHub Profile Link (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return; 
        }
        if ((!linkedinRegex.test(linkedinMember3) || !linkedinMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid LinkedIn Profile Link (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return; 
        }
        if ((!collegeRegex.test(collegeMember2) || !collegeMember3) && memberCount > 2) {
            setAlertMessage('Please enter a valid College Name (Member 3).');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return; 
        }
        if(resumeLinkMember3 == '' && memberCount > 2) {
            if(!resumeMember3) {
                setAlertMessage('Please upload the Resume (Member 3).');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
            if (resumeMember3.size > 100 * 1024) {
                setLoading(false);
                setAlertMessage("Resume file size exceeds the limit (100KB) (Member 3).");
                setAlertType("error");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }
        if(imageLinkMember3 == '' && memberCount > 2) {
            if(!imageMember3) {
                setAlertMessage('Please upload the Image (Member 3).');
                setAlertType('error');
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
            if (imageMember3.size > 100 * 1024) {
                setLoading(false);
                setAlertMessage("Image file size exceeds the limit (100KB) (Member 3).");
                setAlertType("error");
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
                return;
            }
        }

        if ((nameMember2 || emailMember2 || contactMember2 || resumeMember2 || imageMember2 ||
            githubMember2 || linkedinMember2 || collegeMember2 ||
            nameMember3 || emailMember3 || contactMember3 || resumeMember3 || imageMember3 ||
            githubMember3 || linkedinMember3 || collegeMember3) 
            && memberCount == 1) {
            setAlertMessage('Cannot add new members here 😒.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        } else if ((nameMember3 || emailMember3 || contactMember3 || resumeMember3 || imageMember3 ||
            githubMember3 || linkedinMember3 || collegeMember3) && memberCount == 2) {
            setAlertMessage('Cannot add new members here 😒.');
            setAlertType('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return;
        }

        if(!loading) {
            uploadResumeLead();
        }
    }

    return (
        <section className='relative z-0 bg-black overflow-x-hidden h-screen'>
            <div className="fixed bg-primary w-full top-0 z-10">
                {showAlert && <Alert message={alertMessage} type={alertType} />}
            </div>

            <div className={`${isMobile ? 'p-5' : 'p-10'}`} >
            <div className='flex flex-row items-center mb-8'>
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
                <p className="ml-2.5 font-bold text-4xl">Edit Form</p>
            </div>

                {
                    isRegistered && isLead ?
                    <div className="flex flex-col bg-blur border-orange-600 border m-3 rounded-xl p-3 justify-center">
                        <p className="text-2xl font-bold text-white flex justify-center">Team Name : {teamName}</p>
                        <div className="flex justify-center mt-2">
                            {
                                !member2Exists && !member3Exists ? 
                                <p className="text-xl font-semibold text-green-600">Only you have registered so far.</p>
                                : !member3Exists ?
                                <p className="text-xl font-semibold text-green-600">Only you and one more member have registered so far.</p>
                                : <p className="text-xl font-semibold text-green-600">All members have registered.</p>
                            }
                        </div>
                    </div> : isRegistered ?
                    <div className="flex bg-blur border-orange-600 border m-3 rounded-xl p-3 justify-center">
                        <h1 className="text-2xl font-bold text-white">Only lead can edit the details.</h1>
                    </div> :
                    <div className="flex bg-blur border-orange-600 border m-3 rounded-xl p-3 justify-center">
                        <h1 className="text-2xl font-bold text-white">You are not registered in any team.</h1>
                    </div>
                }

                <div>
                    <form className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        {
                            nameLead != '' ?
                            <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 bg-blur'>
                                <legend className='text-2xl font-bold px-2'>Member 1</legend>
                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={nameLead}
                                    onChange={(e) => setNameLead(e.target.value)} 
                                    required 
                                    placeholder="Full Name" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={emailLead}
                                    onChange={(e) => setEmailLead(e.target.value)}
                                    required 
                                    readOnly
                                    placeholder="Email Address" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={contactLead}
                                    onChange={(e) => setContactLead(e.target.value)}  
                                    required 
                                    placeholder="Contact No." />

                                {resumeLinkLead !== '' ? 
                                <div className="flex justify-between">
                                    <a
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        href={resumeLinkLead}
                                        target="_blank"
                                        rel="noreferrer">
                                        View Resume
                                    </a>
                                    <button
                                        className="bg-red-600 hover:bg-red-800 px-4 ml-2 text-white font-bold uppercase rounded-xl mb-3"
                                        onClick={() => setResumeLinkLead('')}>
                                        Remove
                                    </button>
                                </div>
                                :
                                <div className="flex justify-between">
                                    <label
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        htmlFor="resumeFile">
                                        {resumeLead ? 'Resume : ' + resumeLead.name : 'Click to select your Resume'}
                                    </label>
                                    <input
                                        className="hidden"
                                        type="file"
                                        accept=".pdf"
                                        id='resumeFile'
                                        onChange={(e) => setResumeLead(e.target.files[0])}
                                        required />
                                </div>
                                }

                                {imageLinkLead !== '' ?
                                <div className="flex justify-between">
                                    <a
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        href={imageLinkLead}
                                        target="_blank"
                                        rel="noreferrer">
                                        View Image
                                    </a>
                                    <button
                                        className="bg-red-600 hover:bg-red-800 px-4 ml-2 text-white font-bold uppercase rounded-xl mb-3"
                                        onClick={() => setImageLinkLead('')}>
                                        Remove
                                    </button>
                                </div>
                                :
                                <div className="flex justify-between">
                                    <label
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        htmlFor="imageFile">
                                        {imageLead ? 'Image : ' + imageLead.name : 'Click to select your Image'}
                                    </label>
                                    <input
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        id='imageFile'
                                        onChange={(e) => setImageLead(e.target.files[0])}
                                        required />
                                </div>
                                }

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={githubLead}
                                    onChange={(e) => setGithubLead(e.target.value)}  
                                    required 
                                    placeholder="GitHub Profile" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={linkedinLead}
                                    onChange={(e) => setLinkedinLead(e.target.value)} 
                                    required 
                                    placeholder="LinkedIn Profile" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={collegeLead}
                                    onChange={(e) => setCollegeLead(e.target.value)} 
                                    required 
                                    placeholder="College Name" />
                            </fieldset> : ''
                        }
                        
                        {
                            member2Exists ?
                            <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 flex-1'>
                                <legend className='text-2xl font-bold px-2'>Member 2</legend>
                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={nameMember2}
                                    onChange={(e) => setNameMember2(e.target.value)} 
                                    required 
                                    placeholder="Full Name" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={emailMember2}
                                    onChange={(e) => setEmailMember2(e.target.value)}  
                                    required 
                                    readOnly
                                    placeholder="Email Address" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={contactMember2}
                                    onChange={(e) => setContactMember2(e.target.value)}  
                                    required 
                                    placeholder="Contact No." />

                                {resumeLinkMember2 !== '' ? 
                                <div className="flex justify-between">
                                    <a
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        href={resumeLinkMember2}
                                        target="_blank"
                                        rel="noreferrer">
                                        View Resume
                                    </a>
                                    <button
                                        className="bg-red-600 hover:bg-red-800 px-4 ml-2 text-white font-bold uppercase rounded-xl mb-3"
                                        onClick={() => setResumeLinkMember2('')}>
                                        Remove
                                    </button>
                                </div>
                                :
                                <div className="flex justify-between">
                                    <label
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        htmlFor="resumeFile">
                                        {resumeMember2 ? 'Resume : ' + resumeMember2.name : 'Click to select your Resume'}
                                    </label>
                                    <input
                                        className="hidden"
                                        type="file"
                                        accept=".pdf"
                                        id='resumeFile'
                                        onChange={(e) => setResumeMember2(e.target.files[0])}
                                        required />
                                </div>
                                }

                                {imageLinkMember2 !== '' ?
                                <div className="flex justify-between">
                                    <a
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        href={imageLinkMember2}
                                        target="_blank"
                                        rel="noreferrer">
                                        View Image
                                    </a>
                                    <button
                                        className="bg-red-600 hover:bg-red-800 px-4 ml-2 text-white font-bold uppercase rounded-xl mb-3"
                                        onClick={() => setImageLinkMember2('')}>
                                        Remove
                                    </button>
                                </div>
                                :
                                <div className="flex justify-between">
                                    <label
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        htmlFor="imageFile">
                                        {imageMember2 ? 'Image : ' + imageMember2.name : 'Click to select your Image'}
                                    </label>
                                    <input
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        id='imageFile'
                                        onChange={(e) => setImageMember2(e.target.files[0])}
                                        required />
                                </div>
                                }

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={githubMember2}
                                    onChange={(e) => setGithubMember2(e.target.value)}
                                    required 
                                    placeholder="GitHub Profile" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={linkedinMember2}
                                    onChange={(e) => setLinkedinMember2(e.target.value)} 
                                    required 
                                    placeholder="LinkedIn Profile" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={collegeMember2}
                                    onChange={(e) => setCollegeMember2(e.target.value)}  
                                    required 
                                    placeholder="College Name" />
                            </fieldset> : ''
                        }

                        {
                            member3Exists ?
                            <fieldset className='border border-orange-600 p-6 rounded-2xl m-3 flex-1 bg-blur'>
                                <legend className='text-2xl font-bold px-2'>Member 3</legend>
                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={nameMember3}
                                    onChange={(e) => setNameMember3(e.target.value)} 
                                    required
                                    placeholder="Full Name" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={emailMember3}
                                    onChange={(e) => setEmailMember3(e.target.value)}  
                                    required 
                                    readOnly
                                    placeholder="Email Address" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text" 
                                    value={contactMember3}
                                    onChange={(e) => setCollegeMember3(e.target.value)}  
                                    required 
                                    placeholder="Contact No." />

                                {resumeLinkMember3 !== '' ? 
                                <div className="flex justify-between">
                                    <a
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        href={resumeLinkMember3}
                                        target="_blank"
                                        rel="noreferrer">
                                        View Resume
                                    </a>
                                    <button
                                        className="bg-red-600 hover:bg-red-800 px-4 ml-2 text-white font-bold uppercase rounded-xl mb-3"
                                        onClick={() => setResumeLinkMember3('')}>
                                        Remove
                                    </button>
                                </div>
                                :
                                <div className="flex justify-between">
                                    <label
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        htmlFor="resumeFile">
                                        {resumeMember3 ? 'Resume : ' + resumeMember3.name : 'Click to select your Resume'}
                                    </label>
                                    <input
                                        className="hidden"
                                        type="file"
                                        accept=".pdf"
                                        id='resumeFile'
                                        onChange={(e) => setResumeMember3(e.target.files[0])}
                                        required />
                                </div>
                                }

                                {imageLinkMember3 !== '' ?
                                <div className="flex justify-between">
                                    <a
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        href={imageLinkMember3}
                                        target="_blank"
                                        rel="noreferrer">
                                        View Image
                                    </a>
                                    <button
                                        className="bg-red-600 hover:bg-red-800 px-4 ml-2 text-white font-bold uppercase rounded-xl mb-3"
                                        onClick={() => setImageLinkMember3('')}>
                                        Remove
                                    </button>
                                </div>
                                :
                                <div className="flex justify-between">
                                    <label
                                        className="text-xl w-full bg-black px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                                        htmlFor="imageFile">
                                        {imageMember3 ? 'Image : ' + imageMember3.name : 'Click to select your Image'}
                                    </label>
                                    <input
                                        className="hidden"
                                        type="file"
                                        accept="image/*"
                                        id='imageFile'
                                        onChange={(e) => setImageMember3(e.target.files[0])}
                                        required />
                                </div>
                                }

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={githubMember3}
                                    onChange={(e) => setGithubMember3(e.target.value)}
                                    required 
                                    placeholder="GitHub Profile" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={linkedinMember3}
                                    onChange={(e) => setLinkedinMember3(e.target.value)}
                                    required 
                                    placeholder="LinkedIn Profile" />

                                <input 
                                    className="text-xl bg-black w-full px-4 py-2 border border-solid border-white rounded-xl mb-3" 
                                    type="text"
                                    value={collegeMember3}
                                    onChange={(e) => setCollegeMember3(e.target.value)}  
                                    required 
                                    placeholder="College Name" />
                            </fieldset> : ''
                        }

                        <aside className='border border-orange-600 rounded-2xl p-3 mt-[26px] mx-3 mb-3 flex-1'>
                            <div className="bg-blur rounded-2xl h-full p-4">
                                <h2 className="font-bold text-3xl text-red-600">Instructions</h2>
                                <ul className="list-disc mt-4 list-inside text-xl">
                                    <li>Only the lead can edit the team details.</li>
                                    <li>New members cannot be added here only details of existing members can be altered.</li>
                                    <li>Upload your Resume in .pdf or .docx ({'<'}100 kb)</li>
                                    <li>Upload your Image in any image format ({'<'}100 kb)</li>
                                    <li>Linkedin Link : linkedin.com/in/profile-id</li>
                                    <li>GitHub Link : github.com/username</li>
                                    <li>Join this Whatsapp Group to solve your doubts : <a href='https://chat.whatsapp.com/KEK3nEVvZzu1yXXvTO5ySS' className='text-blue-600'>Click to Join</a></li>
                                </ul>
                            </div>
                        </aside>

                        {
                            (member2Exists && !member3Exists) || !user || !isLead ? 
                            <div className="border border-orange-600 rounded-2xl mt-[26px] m-3 flex flex-row overflow-hidden">
                                <a 
                                    href="https://www.instagram.com/algorithm_aiktc/"
                                    target="_blank"
                                    className='w-1/2 flex flex-col items-center justify-center'
                                    rel="noreferrer">
                                    <img
                                        src={insta}
                                        alt="Instagram">
                                    </img>
                                    <p className="text-2xl font-bold text-white text-center">Follow on Instagram</p>
                                </a>
                                <a 
                                    href="https://www.youtube.com/watch?v=3V1PciBdUJM"
                                    target="_blank"
                                    className='w-1/2 flex flex-col items-center justify-center border-l-2 border-orange-600'
                                    rel="noreferrer">
                                    <img
                                        src={youtube}
                                        alt="Youtube">
                                    </img>
                                    <p className="text-2xl font-bold text-white text-center">Watch the Teaser</p>
                                </a>
                            </div> : ''
                        }

                        {
                            memberCount > 0 ?
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
                                    :'Save Changes'}
                                </button>
                            </div> : ''
                        }

                        {
                            memberCount > 0 ?
                            <div className="flex justify-center text-center md:text-left font-bold">
                                <Link
                                    to="/dashboard"
                                    className={`mt-3 ${isMobile ? 'mx-2' : 'mx-3'} text-lg bg-white px-4 py-2 text-orange-600 uppercase rounded-xl`} 
                                    style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    Goto Dashboard
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

export default Edit;
