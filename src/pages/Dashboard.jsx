import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';

import { db } from "../firebase-config";

import { collection, query, where, getDocs, updateDoc, deleteField } from "firebase/firestore";

import { notice } from "../constants";

import {
  Alert,
  Popup
} from "../components";

const Dashboard = () => {
  const [teamName, setTeamName] = useState('');

  const user = useContext(UserContext);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const [nameLead, setNameLead] = useState('');
  const [emailLead, setEmailLead] = useState('');
  const [contactLead, setContactLead] = useState('');
  const [resumeLinkLead, setResumeLinkLead] = useState('');
  const [imageLinkLead, setImageLinkLead] = useState('');
  const [githubLead, setGithubLead] = useState('');
  const [linkedinLead, setLinkedinLead] = useState('');
  const [collegeLead, setCollegeLead] = useState('');

  const [nameMember2, setNameMember2] = useState('');
  const [emailMember2, setEmailMember2] = useState('');
  const [contactMember2, setContactMember2] = useState('');
  const [resumeLinkMember2, setResumeLinkMember2] = useState('');
  const [imageLinkMember2, setImageLinkMember2] = useState('');
  const [githubMember2, setGithubMember2] = useState('');
  const [linkedinMember2, setLinkedinMember2] = useState('');
  const [collegeMember2, setCollegeMember2] = useState('');

  const [nameMember3, setNameMember3] = useState('');
  const [emailMember3, setEmailMember3] = useState('');
  const [contactMember3, setContactMember3] = useState('');
  const [resumeLinkMember3, setResumeLinkMember3] = useState('');
  const [imageLinkMember3, setImageLinkMember3] = useState('');
  const [githubMember3, setGithubMember3] = useState('');
  const [linkedinMember3, setLinkedinMember3] = useState('');
  const [collegeMember3, setCollegeMember3] = useState('');

  const [isLead, setIsLead] = useState(false);

  const [member2Exists, setMember2Exists] = useState(false);
  const [member3Exists, setMember3Exists] = useState(false);

  const [memberCount, setMemberCount] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [whichMember, setWhichMember] = useState('');

  var q = query(collection(db, "teams"), where("teamName", "==", teamName));
  const [docRef, setDocRef] = useState(null);

  const getTeamData = async (e) => {
    e.preventDefault();

    if (!user) {
      setAlertMessage('Please login to view the dashboard.');
      setAlertType('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return;
    }

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
      if (data && user.email == data.emailLead) {
        if (data.nameLead || data.emailLead || data.contactLead
          || data.githubLead || data.linkedinLead || data.collegeLead) {
          setNameLead(data.nameLead);
          setEmailLead(data.emailLead);
          setContactLead(data.contactLead);
          setImageLinkLead(data.imageLead);
          setResumeLinkLead(data.resumeLead);
          setGithubLead(data.githubLead);
          setLinkedinLead(data.linkedinLead);
          setCollegeLead(data.collegeLead);
          setMemberCount(1);
        }
        if (data.nameMember2 && data.emailMember2 && data.contactMember2
          && data.githubMember2 && data.linkedinMember2 && data.collegeMember2) {
          setNameMember2(data.nameMember2);
          setEmailMember2(data.emailMember2);
          setContactMember2(data.contactMember2);
          setImageLinkMember2(data.imageMember2);
          setResumeLinkMember2(data.resumeMember2);
          setGithubMember2(data.githubMember2);
          setLinkedinMember2(data.linkedinMember2);
          setCollegeMember2(data.collegeMember2);
          setMemberCount(2);
        } else {
          setMember2Exists(true);
        }
        if (data.nameMember3 && data.emailMember3 && data.contactMember3
          && data.githubMember3 && data.linkedinMember3 && data.collegeMember3) {
          setNameMember3(data.nameMember3);
          setEmailMember3(data.emailMember3);
          setContactMember3(data.contactMember3);
          setImageLinkMember3(data.imageMember3);
          setResumeLinkMember3(data.resumeMember3);
          setGithubMember3(data.githubMember3);
          setLinkedinMember3(data.linkedinMember3);
          setCollegeMember3(data.collegeMember3);
          setMemberCount(3);
        } else {
          setMember3Exists(true);
        }
        setLoading2(false);
      } 

      if (data && user.email != data.emailLead) {
        setIsLead(false);
      } else {
        setIsLead(true);
      }
    }
  }, [docRef]);

  const deleteMember2 = async () => {
    setShowPopup(true);
    if(isLead) {
      setWhichMember('2');
      setShowPopup(true);
      if (memberCount == 2) {
        await updateDoc(docRef.ref, {
          nameMember2: deleteField(),
          emailMember2: deleteField(),
          contactMember2: deleteField(),
          githubMember2: deleteField(),
          linkedinMember2: deleteField(),
          collegeMember2: deleteField(),
          resumeMember2: deleteField(),
          imageMember2: deleteField(),
        });
        setMember2Exists(true);
        setMemberCount(1);
        setAlertMessage('Member 2 deleted successfully');
        setAlertType('success');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
        setNameMember2('');
        setEmailMember2('');
        setContactMember2('');
        setResumeLinkMember2('');
        setImageLinkMember2('');
        setGithubMember2('');
        setLinkedinMember2('');
        setCollegeMember2('');
        setWhichMember('');
      } else {
        setAlertMessage('Member 2 dosen\'t exists');
        setAlertType('error');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } else {
      setAlertMessage('You are not authorized to delete a member.');
      setAlertType('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }

  const deleteMember3 = async () => {
    if(isLead) {
      setWhichMember('3');
      setShowPopup(true);
      if (memberCount == 3) {
        await updateDoc(docRef.ref, {
          nameMember3: deleteField(),
          emailMember3: deleteField(),
          contactMember3: deleteField(),
          githubMember3: deleteField(),
          linkedinMember3: deleteField(),
          collegeMember3: deleteField(),
          resumeMember3: deleteField(),
          imageMember3: deleteField(),
        });
        setMember3Exists(true);
        setMemberCount(2);
        setAlertMessage('Member 3 deleted successfully');
        setAlertType('success');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
        setNameMember3('');
        setEmailMember3('');
        setContactMember3('');
        setResumeLinkMember3('');
        setImageLinkMember3('');
        setGithubMember3('');
        setLinkedinMember3('');
        setCollegeMember3('');
        setWhichMember('');
      } else {
        setAlertMessage('Member 3 dosen\'t exists');
        setAlertType('error');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } else {
      setAlertMessage('You are not authorized to delete a member.');
      setAlertType('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }

  return (
    <div className="fixed isolate overflow-hidden h-screen w-screen flex justify-center">
      <div className="fixed bg-primary w-full top-0 z-10">
        {showAlert && <Alert message={alertMessage} type={alertType} />}
      </div>
      <div className="fixed bg-primary w-full top-0 z-10">
        {
          showPopup && 
          <Popup
            onClose={() => setShowPopup(false)}
            onOkay={() => whichMember == '2' ? deleteMember2() : deleteMember3()}
            onRevert={() => setShowPopup(false)} />
        }
      </div>
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl "
        aria-hidden="true">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#554b00] to-[#eb5600] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }} />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff0000] to-[#ff0000] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }} />
      </div>
      <div className="box m-12 p-6 lg:p-8 bg-orange-100 rounded-xl w-full md:overflow-hidden overflow-y-auto bg-opacity-10 ">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-full md:grid-rows-4 gap-4 text-black h-full">
          <div className="h-96 md:h-full md:row-span-4 col-span-1 md:col-span-3 border-2 text-white border-orange-600 overflow-y-auto rounded-xl">
            <div className="bg-gradient-to-r from-amber-500 to-orange-900 p-3 flex justify-center sticky top-0"> 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 cursor-pointer mt-2 mr-2" 
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
              <input
                className="w-3/4 text-lg px-4 py-2 border border-solid mr-4 border-orange-600 rounded-xl"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Team Name" />
              <button
                onClick={getTeamData}
                className="w-2/4 sm:w-1/5 bg-white font-bold h-full px-4 py-2.5 text-orange-600 hover:bg-orange-800 uppercase rounded-xl text-lg">
                Search
              </button>
            </div>

            <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
              <fieldset className="grid grid-cols-4 gap-6 p-3 rounded-md shadow-sm">
                <div className="space-y-2 col-span-full lg:col-span-1 ">
                  <p className="text-lg font-bold">Member 1 (Lead)</p>
                  <p className="text-medium">has access of deleting</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full border-b">
                    <label htmlFor="firstname" className="text-sm">Full Name</label>
                    <input id="firstname" type="text" placeholder="Full Name" value={nameLead} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="email" className="text-sm">Email Address</label>
                    <input id="email" type="email" placeholder="Email Address" value={emailLead} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="contact" className="text-sm">Contact No.</label>
                    <input id="contact" type="number" placeholder="Contact No." value={contactLead} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="github_profile" className="text-sm">GitHub Profile</label>
                    <input id="github_profile" type="text" placeholder="GitHub Profile" value={githubLead} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="linkdin_profile" className="text-sm">LinkedIn Profile</label>
                    <input id="linkdin_profile" type="text" value={linkedinLead} placeholder="LinkedIn Profile" disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full border-b">
                    <label htmlFor="college" className="text-sm">College Name</label>
                    <input id="college" type="text" value={collegeLead} placeholder="College Name" disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 mt-2">
                    <a
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                      href={resumeLinkLead}
                      target="_blank"
                      rel="noreferrer">
                      View Resume
                    </a>
                  </div>
                  <div className="col-span-full sm:col-span-3 mt-2">
                    <a
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                      href={imageLinkLead}
                      target="_blank"
                      rel="noreferrer">
                      View Image
                    </a>
                  </div>
                </div>
              </fieldset>

              <fieldset className="grid grid-cols-4 gap-6 p-3 rounded-md shadow-sm">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="text-lg font-bold">Member 2</p>
                  <p className={`${member2Exists == true ? 'block' : 'hidden'} text-medium text-red-500`}>Member 2 dosen't exists</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full border-b">
                    <label htmlFor="firstname" className="text-sm">Full Name</label>
                    <input id="firstname" type="text" placeholder="Full Name" value={nameMember2} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="email" className="text-sm">Email Address</label>
                    <input id="email" type="email" placeholder="Email Address" value={emailMember2} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="contact" className="text-sm">Contact No.</label>
                    <input id="contact" type="number" placeholder="Contect No." value={contactMember2} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="github_profile" className="text-sm">GitHub Profile</label>
                    <input id="github_profile" type="text" placeholder="GitHub Profile" value={githubMember2} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="linkdin_profile" className="text-sm">LinkedIn Profile</label>
                    <input id="linkdin_profile" type="text" value={linkedinMember2} placeholder="linkedIn Profile" disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full border-b">
                    <label htmlFor="college" className="text-sm">College Name</label>
                    <input id="college" type="text" value={collegeMember2} placeholder="College Name" disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 mt-2">
                    <a
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                      href={resumeLinkMember2}
                      target="_blank"
                      rel="noreferrer">
                      View Resume
                    </a>
                  </div>
                  <div className="col-span-full sm:col-span-3 mt-2">
                    <a
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                      href={imageLinkMember2}
                      target="_blank"
                      rel="noreferrer">
                      View Image
                    </a>
                  </div>
                </div>
              </fieldset>

              <fieldset className="grid grid-cols-4 gap-6 p-3 rounded-md shadow-sm pb-4">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="text-lg font-bold">Member 3</p>
                  <p className={`${member3Exists == true ? 'block' : 'hidden'} text-medium text-red-500`}>Member 3 dosen't exists</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full border-b">
                    <label htmlFor="firstname" className="text-sm">Full Name</label>
                    <input id="firstname" type="text" placeholder="Full Name" value={nameMember3} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="email" className="text-sm">Email Address</label>
                    <input id="email" type="email" placeholder="Email Address" value={emailMember3} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="contact" className="text-sm">Contact No.</label>
                    <input id="contact" type="number" placeholder="Contact No." value={contactMember3} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="github_profile" className="text-sm">GitHub Profile</label>
                    <input id="github_profile" type="text" placeholder="GitHub Profile" value={githubMember3} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="linkdin_profile" className="text-sm">LinkedIn Profile</label>
                    <input id="linkdin_profile" type="text" value={linkedinMember3} placeholder="LinkedIn Profile" disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full border-b">
                    <label htmlFor="college" className="text-sm">College Name</label>
                    <input id="college" type="text" placeholder="College Name" value={collegeMember3} disabled="disabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 mt-2">
                    <a
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                      href={resumeLinkMember3}
                      target="_blank"
                      rel="noreferrer">
                      View Resume
                    </a>
                  </div>
                  <div className="col-span-full sm:col-span-3 mt-2">
                    <a
                      className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3"
                      href={imageLinkMember3}
                      target="_blank"
                      rel="noreferrer">
                      View Image
                    </a>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="row-span-2 col-span-1 md:col-span-2 border-2 border-orange-600 rounded-xl md:overflow-y-auto">
            <div className="text-white">
              <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-lg dark:text-gray-400">{notice[0].date}</span>
                </div>
                <div className="mt-3">
                  <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{notice[0].id}</a>
                  <p className="mt-2 text-lg">{notice[0].notice}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-2 col-span-1 md:col-span-2 border-2 border-orange-600 rounded-xl md:overflow-y-auto p-3">
            <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-1">
              <h1 className="text-2xl font-bold text-white">Delete Members</h1>
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-black text-2xl text-white bg-opacity-60">
                  1
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">{nameLead ? nameLead : 'Not Registered'}</p>
                </div>
              </div>
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-black text-2xl text-white bg-opacity-60">
                  2
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">{nameMember2 ? nameMember2 : 'Not Registered'}</p>
                  <svg onClick={deleteMember2} xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-black text-2xl text-white bg-opacity-60">
                  3
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">{nameMember3 ? nameMember3 : 'Not Registered'}</p>
                  <svg onClick={deleteMember3} xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="row-span-4 col-span-1 md:col-start-6 md:row-start-1 md:overflow-y-auto border-2 border-orange-600 rounded-xl md:overflow-y-auto p-3">
            <div className="p-2">
              <div className="container">
                <h1 className="text-2xl font-bold text-white mb-5">Timeline</h1>
                <div className="flex flex-col md:grid grid-cols-12 text-white">
                  <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                        <i className="fas fa-check-circle text-white"></i>
                      </div>
                    </div>
                    <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p className="leading-tight text-justify w-full">
                        Registration Done 
                      </p>
                    </div>
                  </div>
                  <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                        <i className="fas fa-exclamation-circle text-white"></i>
                      </div>
                    </div>
                    <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p className="leading-tight text-justify">Quiz</p>
                    </div>
                  </div>
                  <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                        <i className="fas fa-exclamation-circle text-white"></i>
                      </div>
                    </div>
                    <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p className="leading-tight text-justify">Selection</p>
                    </div>
                  </div>
                  <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                        <i className="fas fa-exclamation-circle text-white"></i>
                      </div>
                    </div>
                    <div className="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                      <p className="leading-tight text-justify">Selection Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Dashboard;
