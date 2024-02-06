import React from "react";

import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="w-[100vw] h-[100vh] hero-bg ">
      <Navbar />
       <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} sm:px-16 px-6 sm:py-16 py-20 pt-20 max-w-7xl mx-auto relative z-0`}>    
       
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row justify-center items-center w-full mt-28">
            <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
            <h1 className="flex text-center font-poppins font-semibold lg:text-[200px] text-[80px] text-white ss:leading-[100.8px] leading-[75px]">
             ALGO
            </h1>
            </motion.div>
            <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
            <h1 className="flex-end text-center font-poppins font-semibold lg:text-[200px] text-[80px] text-white ss:leading-[100.8px] leading-[75px]">
             RITHM
            </h1>
            </motion.div>
    </div>
    </div>
    </section>
    <div className="flex justify-center items-center">

    <a className="   py-2 px-6 bg-white text-lg text-orange-600 font-bold rounded-xl transition duration-200" href="/register">Register</a>
    </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");