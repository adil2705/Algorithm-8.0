import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    if(idName === "hero") {
      return (
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className='p-0 w-full h-full'>
          <Component />
        </motion.section>
      );
    } else {
      return (
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-6xl mx-auto`}>
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
      );
    }
  };

export default StarWrapper;
