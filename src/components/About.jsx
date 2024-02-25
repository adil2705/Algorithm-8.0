import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[226px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] bg-blur rounded-xl border-orange-600 border-2'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='xs:w-16 xs:h-16  w-20 h-20 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] leading-[30px] text-center w-full'>
        Overall, Algorithm 8.0 is an unique and innovative event that encourages 
        innovation and collaboration in the tech community. It provides a 
        platform for our participants to challenge themselves, expand their knowledge,
        and create meaningful solutions to real-world problems related to social 
        awareness. Whether you are a seasoned developer or a newcomer to the field, 
        Algorithm 8.0 offers a unique opportunity to be a part of something truly impactful 
        and make a difference in the world.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
