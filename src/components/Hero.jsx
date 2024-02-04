import { styles } from "../styles";
import { astronaut } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} sm:px-16 px-6 sm:py-16 py-20 pt-20 max-w-7xl mx-auto relative z-0`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div variants={fadeIn("right", "spring", 0.3, 0.75)}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              AIKTC <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Algorithm 8.0</span>{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[16px] sm:text-[25px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            WHERE <span className="text-gradient-blue">LOGIC</span>{" "} MEETS <span className="text-gradient-green">CREATIVITY</span>{" "}
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Algorithm is a hackathon that was started in 2014 with the goal of raising social awareness through the use of web technology.
          </p>
        </motion.div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
          <img src={astronaut} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");