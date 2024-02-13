import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';

import { db } from "../firebase-config";
import { collection, query, where, getDocs, } from "firebase/firestore";

import { notice } from "../constants";

import {
  Alert
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
          console.log(data.teamName);
          setNameLead(data.nameLead);
          console.log(data.nameLead);
          setEmailLead(data.emailLead);
          setContactLead(data.contactLead);
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
          setGithubMember3(data.githubMember3);
          setLinkedinMember3(data.linkedinMember3);
          setCollegeMember3(data.collegeMember3);
          setMemberCount(3);
        } else {
          setMember3Exists(true);
        }
        setLoading2(false);
      } else if (data && user.email != data.emailLead) {
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

  return (
    <div className="fixed isolate overflow-hidden h-screen w-screen flex justify-center">
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
      <div className="box m-12 p-6 lg:p-8 bg-orange-100 rounded-lg w-full md:overflow-hidden overflow-y-auto bg-opacity-10 ">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-full md:grid-rows-4 gap-4 text-black h-full">
          <div className="h-96 md:h-full md:row-span-4 col-span-1 md:col-span-3 border text-white border-orange-600 overflow-y-auto rounded-xl">
            <div className="bg-gradient-to-r from-amber-500 to-orange-900 p-3 flex justify-center sticky top-0"> 
              <input
                className="w-3/4 text-xl px-4 py-2 bg-inherite border border-solid mr-4 border-orange-600 rounded-xl"
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
              <fieldset className="grid grid-cols-4 gap-6 p-3 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1 ">
                  <p className="text-lg">Member 1</p>
                  <p className="text-medium">has access of deleting </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full border-b">
                    <label htmlFor="firstname" className="text-sm">Full Name</label>
                    <input id="firstname" type="text" placeholder="First name" value={nameLead} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="Email" value={emailLead} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="contact" className="text-sm">Contact</label>
                    <input id="contact" type="number" placeholder="Contact" value={contactLead} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="github_profile" className="text-sm">Github Profile</label>
                    <input id="github_profile" type="text" placeholder="Github link " value={githubLead} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="linkdin_profile" className="text-sm">Linkdin Profile</label>
                    <input id="linkdin_profile" type="text" value={linkedinLead} placeholder="Linkdin link " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full border-b">
                    <label htmlFor="college" className="text-sm">College Name</label>
                    <input id="college" type="text" value={collegeLead} placeholder="College name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="grid grid-cols-4 gap-6 p-3 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1 ">
                  <p className="text-lg">Member 2</p>
                  <p className={`${member2Exists == true ? 'block' : 'hidden'} text-medium text-red-500`} >Member 2 dosen't exists</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full border-b">
                    <label htmlFor="firstname" className="text-sm">Full Name</label>
                    <input id="firstname" type="text" placeholder="First name" value={nameMember2} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="Email" value={emailMember2} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="contact" className="text-sm">Contact</label>
                    <input id="contact" type="number" placeholder="Contect" value={contactMember2} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="github_profile" className="text-sm">Github Profile</label>
                    <input id="github_profile" type="text" placeholder="Github Link" value={githubMember2} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="linkdin_profile" className="text-sm">Linkdin Profile</label>
                    <input id="linkdin_profile" type="text" value={linkedinMember2} placeholder="linkdin link" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full border-b">
                    <label htmlFor="college" className="text-sm">College Name</label>
                    <input id="college" type="text" value={collegeMember2} placeholder="College name" disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                </div>
              </fieldset>

              <fieldset className="grid grid-cols-4 gap-6 p-3 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1 ">
                  <p className="text-lg">Member 3</p>
                  <p className={`${member3Exists == true ? 'block' : 'hidden'} text-medium text-red-500`}>Member 3 dosen't exists</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full border-b">
                    <label htmlFor="firstname" className="text-sm">Full Name</label>
                    <input id="firstname" type="text" placeholder="First name" value={nameMember3} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="Email" value={emailMember3} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="contact" className="text-sm">Contact</label>
                    <input id="contact" type="number" placeholder="Contact" value={contactMember3} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="github_profile" className="text-sm">Github Profile</label>
                    <input id="github_profile" type="text" placeholder="Github link " value={githubMember3} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full sm:col-span-3 border-b">
                    <label htmlFor="linkdin_profile" className="text-sm">Linkdin Profile</label>
                    <input id="linkdin_profile" type="text" value={linkedinMember3} placeholder="Linkdin link " disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                  <div className="col-span-full border-b">
                    <label htmlFor="college" className="text-sm">College Name</label>
                    <input id="college" type="text" placeholder="College name" value={collegeMember3} disabled="dsabled" className="w-full h-8 rounded-md focus:ring bg-inherit" />
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="row-span-2 col-span-1 md:col-span-2 border border-orange-600 rounded-md md:overflow-y-auto">
            <div className="text-white">
              <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-gray-400">{notice[0].date}</span>
                </div>
                <div className="mt-3">
                  <a rel="noopener noreferrer" href="#" className="text-xl font-bold hover:underline">{notice[0].id}</a>
                  <p className="mt-2 text-sm">{notice[0].notice}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-1 md:col-span-2 ">
            <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-1 py-5">
              {/* card */}
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-black text-2xl text-white bg-opacity-60">
                  1
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">{nameLead}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="flex overflow-hidden rounded-lg bg-black bg-opacity-50">
                <div className="flex items-center justify-center px-4 bg-orange-600 text-2xl text-white bg-opacity-60">
                  2
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">{nameMember2}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="flex overflow-hidden rounded-lg bg-orange-600 bg-opacity-20">
                <div className="flex items-center justify-center px-4 bg-orange10 text-2xl text-white bg-opacity-40">
                  3
                </div>
                <div className="flex items-center justify-between flex-1 p-3 text-white">
                  <p className="text-2xl font-semibold">{nameMember3}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="28px" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M9 2H7a.5.5 0 0 0-.5.5V3h3v-.5A.5.5 0 0 0 9 2m2 1v-.5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2V3H2.251a.75.75 0 0 0 0 1.5h.312l.317 7.625A3 3 0 0 0 5.878 15h4.245a3 3 0 0 0 2.997-2.875l.318-7.625h.312a.75.75 0 0 0 0-1.5zm.936 1.5H4.064l.315 7.562A1.5 1.5 0 0 0 5.878 13.5h4.245a1.5 1.5 0 0 0 1.498-1.438zm-6.186 2v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m3.75-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>
                </div>
              </div>
            </div>
            {/* card end */}
          </div>
          <div className="row-span-4 col-span-1 md:col-start-6 md:row-start-1  md:overflow-y-auto ">
            <div className="p-2">
              <div className="container">
                <div className="m-4 text-white text-2xl">Timeline</div>
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
                        Registration Started 
                      </p>
                    </div>
                  </div>
                  <div className="flex md:contents">
                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                        <i className="fas fa-times-circle text-white"></i>
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
                        <i className="fas fa-times-circle text-white"></i>
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
