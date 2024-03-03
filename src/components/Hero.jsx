import React, { useContext, useState } from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Marquee from "./Marquee";

import { UserContext } from '../context/UserContext';

import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

const Hero = () => {
  const isMobile = window.innerWidth < 768;

  const [isRegistered, setIsRegistered] = useState(false);

  const [status, setStatus] = useState("fail");

  const user = useContext(UserContext);

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

        if(querySnapshot1 != null) {
          querySnapshot1.forEach((doc) => {
            setStatus(doc.data().status);
          });
        } else if(querySnapshot2 != null) {
          querySnapshot2.forEach((doc) => {
            setStatus(doc.data().status);
          });
        } else if(querySnapshot3 != null) {
          querySnapshot3.forEach((doc) => {
            setStatus(doc.data().status);
          });
        }
      }
    }

    checkUserRegistered();
  }

  return (
    <section className={`${isMobile ? 'hero-bg-mobile' : 'hero-bg-desktop'}`}>
      <Navbar user={user} />
      <Marquee />
      <section className='flex flex-col items-center justify-center w-[100vw] h-[100vh]'>
        <section className={`${isMobile ? '-top-24' : '-top-0'} flex md:flex-row flex-col relative z-0`}>   
          <div className={`flex-1 ${styles.flexStart} flex-col justify-center items-center`}>
            <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
              <h1 className={`flex text-center justify-center font-poppins font-semibold ${isMobile ? 'text-2xl' : 'text-4xl'} text-white drop-shadow-[0_1.2px_1.2px_rgba(234,88,12,1.0)]`}>
                AIKTC's
              </h1>
            </motion.div>
            <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
              <h1 className={`flex text-center justify-center px-1 font-poppins font-semibold ${isMobile ? 'text-2xl' : 'text-4xl'} text-white drop-shadow-[0_1.2px_1.2px_rgba(234,88,12,1.0)]`}>
              Department of Computer Engineering Presents
              </h1>
            </motion.div>
            <div className="flex flex-col justify-center items-center w-full p-0 my-5">
              <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
                <h1 className="leading-none m-0 flex text-center font-bold lg:text-[150px] text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-orange-600 to-indigo-800 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1.0)] p-0">
                  ALGORITHM
                </h1>
              </motion.div>
              <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
                <h1 className="leading-none m-0 flex text-center font-bold lg:text-[150px] text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-orange-600 to-indigo-800 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1.0)] p-0">
                  8.0
                </h1>
              </motion.div>
            </div>
            <div className="flex flex-col justify-center items-center w-full p-0">
              <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
                <h1 className={`flex text-center justify-center px-1 font-poppins font-semibold ${isMobile ? 'text-2xl' : 'text-4xl'} text-white drop-shadow-[0_1.2px_1.2px_rgba(234,88,12,1.0)]`}>
                  where logic meets creativity
                </h1>
              </motion.div>
            </div>
            <div className="flex flex-row justify-center items-center my-10">
              {user ? !isRegistered ? 
                <Link
                  to="/register"
                  className="inline-block py-2 px-6 bg-white text-orange-600 text-xl lg:text-2xl font-bold rounded-xl transition duration-200">
                    Registration Ended
                </Link> 
                :
                <div classname="flex flex-row justify-center items-center space-x-2">
                  <Link
                    to="/edit"
                    className="inline-block py-2 px-6 bg-white text-orange-600 text-xl lg:text-2xl font-bold rounded-xl transition duration-200">
                      Edit Form
                  </Link>
                  {
                    status == "pass" ?
                    <Link
                      to="/dashboard"
                      className="inline-block py-2 px-6 bg-white text-orange-600 text-xl lg:text-2xl font-bold rounded-xl transition duration-200 ml-5">
                      Dashboard
                    </Link> :
                    <Link
                      to="/rejected"
                      className="inline-block py-2 px-6 bg-white text-orange-600 text-xl lg:text-2xl font-bold rounded-xl transition duration-200 ml-5">
                      Dashboard
                    </Link>
                  }
               </div>
                : 
                <Link
                  to="/signin"
                  className="inline-block py-2 px-6 bg-white text-orange-600 text-xl lg:text-2xl font-bold rounded-xl transition duration-200">
                  Login to Register
                </Link>
              }
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
