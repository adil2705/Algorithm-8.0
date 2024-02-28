import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Faq = () => {
  const isMobile = window.innerWidth < 768; 

  return (
    <section className="text-gray-600 sm:py-15 py-2 relative z-0">
      <div className="container text-center">
        <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
          <h2 className={styles.sectionHeadText}>FAQ's</h2>
        </motion.div>
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <div class="flex flex-wrap md:w-screen lg:w-4/5 sm:mx-auto sm:mb-2 mt-10">
            <div class={`w-full lg:w-1/2 ${isMobile ? 'px-0' : 'px-2'} py-2`}>  
              <details class="mb-4">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>
                    Explain the registration process?
                  </span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  <ul className="list-disc list-inside">
                    <li className='font-bold'>Each member has to register individually.</li>
                    <li>Use existing team name to register yourself as a part of existing team (team name is case & space sensitive).</li>
                    <li>Choose a new team name to create a new team and share that team name with your team mates so that they can become part of your team.</li>
                    <li>Member to register first is automatically the lead of the team.</li>
                    <li>Each team can only have three members.</li>
                    <li>Join this Whatsapp Group to solve your doubts : <a href='https://chat.whatsapp.com/KEK3nEVvZzu1yXXvTO5ySS' className='text-blue-600'>Click to Join</a></li>
                  </ul>
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>What is Algorithm 8.0 all about?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  Algorithm hackathon is an event where participants come
                  together to solve real world problems, basically in a
                  competitive environment.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>What do I need to bring to the hackathon?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  It's better to bring your own laptop or any other computing
                  device, along with any software/assets that you need to
                  develop and test your code.
                </p>
              </details>
              <details class="mb-0">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>
                    Can I work on my solution before the hackathon?
                  </span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                The problem statement will be provided 3 days before the conduction of the hackathon and the teams can start working on the hackathon once the problem statements are displayed.
                </p>
              </details>
            </div>
            <div class={`w-full lg:w-1/2 ${isMobile ? 'px-0' : 'px-2'} py-2`}>
              <details class="mb-4">
                 <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>Who all can participate in Algorithm 8.0?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  The Algorithm is open exclusively for students of any
                  background with any skill levels.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>How will the solutions be evaluated and scored?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  The solutions will be evaluated and scored based on criteria
                  such as the efficiency and accuracy of the code, the
                  creativity of the solution, and the quality of presentation.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>
                    What kind of support will be provided during the hackathon?
                  </span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  Support during the hackathon may include access to mentors,
                  technical support for hardware and software issues, and
                  resources for researching algorithmic techniques.
                </p>
              </details>
              <details class="mb-0">
                <summary className="rounded-xl bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>How many hours will hackathon last for?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-xl">
                  Algorithm is a 32 Hrs hackathon. For more detail check the
                  timeline section.
                </p>
              </details>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(Faq, "faq");

