import React from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Faq = () => {
  return (
    <section className="text-gray-700 sm:py-15 py-20 pt-20 max-w-7xl mx-auto relative z-0">
      <div className="container mx-auto px-5 text-center">
        <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
          <h2 className={styles.sectionHeadText}>FAQ's</h2>
        </motion.div>
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 mt-10">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>What is Algorithm 8.0 all about?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Algorithm hackathon is an event where participants come
                  together to solve real world problems, basically in a
                  competitive environment.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>What kind of support will be available during the hackathon?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Support during the hackathon may include access to mentors, technical support for hardware and software issues, and resources for researching algorithmic techniques.
                </p>
                </details>
                <details class="mb-4">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>What do I need to bring to the hackathon?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  It's better to bring your own laptop or any other computing
                  device, along with any software/assets that you need to
                  develop and test your code.
                </p>
              </details>
              <details class="mb-0">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>How many hours will hackathon last for?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Algorithm is a 32 Hrs hackathon. For more detail check the
                  timeline section.
                </p>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                 <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>Who all can participate in Algorithm 8.0?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  The Algorithm is open exclusively for students of any
                  background with any skill levels.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>How will the solutions be evaluated and scored?</span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  The solutions will be evaluated and scored based on criteria
                  such as the efficiency and accuracy of the code, the
                  creativity of the solution, and the quality of presentation.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>
                    What kind of support will be provided during the hackathon?
                  </span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Support during the hackathon may include access to mentors,
                  technical support for hardware and software issues, and
                  resources for researching algorithmic techniques.
                </p>
              </details>
              <details class="mb-4">
                <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  <span>
                    Can I work on my solution before the hackathon?
                  </span>
                  <span className="transition group-open:rotate-180" />
                </summary>
                <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  {/* The meals will be provided along with some snacks and basic amenities. */}
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

