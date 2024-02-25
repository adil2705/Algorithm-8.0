import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement 
      contentStyle={{
        background: "#000000",
        color: "#ffffff",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        border: "2px solid #ea580c"
      }}
      contentArrowStyle={{ borderRight: "10px solid #ea580c" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            className='w-[100%] h-[100%] object-contain rounded-full' />
        </div>
      }>
      <div>
        <h3 className= 'text-white text-[25px] font-bold'>{experience.title}</h3>
        <span className='text-white-100 text-[20px]'>{experience.date}</span>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[15px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          This is the detailed list of events of Algorithm 8.0
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Timeline of Events
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col p-0'>
        <VerticalTimeline
          className="w-full">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={`experience-${index}`}
              experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
