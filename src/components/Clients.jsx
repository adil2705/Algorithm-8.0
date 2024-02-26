import React from "react";

import { clients } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Clients = () => (
    <>
        <motion.div variants={fadeIn("down", "spring", 0.5, 0.75)} className="text-center">
            <h2 className={styles.sectionHeadText}>Our Sponsers</h2>
        </motion.div>
        <div className={`${styles.flexCenter} my-4  px-6 pt-10 max-w-7xl mx-auto relative z-0`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client, index) => (
                    <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 grayscale  hover:grayscale-0`}>
                        <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className="text-center">
                            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain rounded-full outline" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default SectionWrapper(Clients, "clients");