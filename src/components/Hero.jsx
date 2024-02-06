import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="w-[100vw] h-[100vh] hero-bg ">
      <Navbar />
       <section className={`flex md:flex-row flex-col ${styles.paddingY} sm:px-16 px-6 sm:py-16 py-20 pt-20 max-w-7xl mx-auto relative z-0`}>    
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
            <h1 className="flex text-center justify-center font-poppins font-semibold lg:text-[50px] text-[25px] text-white">
              AIKTC's
            </h1>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
            <h1 className="flex text-center font-poppins font-semibold lg:text-[50px] text-[25px] text-white">
              Department of Computer Engineering Presents
            </h1>
          </motion.div>
          <div className="flex flex-row justify-center items-center w-full">
            <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
              <h1 className="flex text-center font-poppins font-bold lg:text-[150px] text-[80px] text-white">
                ALGO
              </h1>
            </motion.div>
            <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
              <h1 className="flex text-center font-poppins font-bold lg:text-[150px] text-[80px]">
                RITHM
              </h1>
            </motion.div>
          </div>
          <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
            <h1 className="flex text-center font-poppins font-bold lg:text-[150px] text-[80px] text-white">
              8.0
            </h1>
          </motion.div>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="flex justify-center items-center">
          <Link
            to="/register"
            className="hidden lg:inline-block py-2 px-6 bg-white text-orange-600 text-2xl font-bold rounded-xl transition duration-200">
            Register
          </Link>
        </button>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");