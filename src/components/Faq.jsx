import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const Faq = () => {
return (
<div>
<section className="text-gray-700  sm:py-16 py-20 pt-20 max-w-7xl mx-auto relative z-0">
   <div className="container mx-auto px-5  text-center">
      <motion.div variants={fadeIn("down", "spring", 0.3, 0.75)}>
      <h2 className={styles.sectionHeadText}>FAQ's</h2>
      </motion.div>
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
      {/* 
      <div
         data-aos="fade-up"
         data-aos-duration="1000"
         className="-mx-2 mt-4 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
         <div className="w-full px-4 py-2 lg:w-1/2 ">
            <details className="mb-8 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  What is Algorithm 8.0 all about ?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Algorithm hackathon is an event where participants come together to solve real world problems, basically in a competitive environment.
               </p>
            </details>
            <details className="mb-4 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  Who can participate in Algorithm 8.0?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  The Algorithm is open exclusively for students of any background with any skill levels.
               </p>
            </details>
         </div>
         <div className="w-full px-4 py-2 lg:w-1/2 ">
            <details className="mb-8 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-4 font-semibold">
                  How many hours hackathon it is?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Algorithm is a 32 Hrs hackathon. For more detail check the timeline section.
               </p>
            </details>
            <details className="mb-4 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  What do I need to bring to the hackathon?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  It's better to bring your own laptop or any other computing device, along with any software/assets that you need to develop and test your code.
               </p>
            </details>
         </div>
         <div className="w-full px-4 py-2 lg:w-1/2">
            <details className="mb-8 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  How will the solutions be evaluated and scored?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  The solutions will be evaluated and scored based on criteria such as the efficiency and accuracy of the code, the creativity of the solution, and the quality of presentation.
               </p>
            </details>
            <details className="mb-4 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  What kind of accommodation and food will be provided?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  The meals will be provided along with some snacks and basic amenities.
               </p>
            </details>
         </div>
         <div className="w-full px-4 py-2 lg:w-1/2">
            <details className="mb-8 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  Can I work on my solution before the hackathon?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  The problem statement will be provided 3 days before the conduction of the hackathon and the teams can start working on the hackathon once the problem statements are displayed.
               </p>
            </details>
            <details className="mb-4 shadow-card">
               <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                  What kind of support will be available during the hackathon?
               </summary>
               <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                  Support during the hackathon may include access to mentors, technical support for hardware and software issues, and resources for researching algorithmic techniques.
               </p>
            </details>
         </div>
         */}
         <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span> What is Algorithm 8.0 all about ?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     Algorithm hackathon is an event where participants come together to solve real world problems, basically in a competitive environment.
                  </p>
               </details>
            </div>
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span> Who can participate in Algorithm 8.0?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     The Algorithm is open exclusively for students of any background with any skill levels.
                  </p>
               </details>
            </div>
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span>  How many hours hackathon it is?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     Algorithm is a 32 Hrs hackathon. For more detail check the timeline section.
                  </p>
               </details>
            </div>
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span> What do I need to bring to the hackathon?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     It's better to bring your own laptop or any other computing device, along with any software/assets that you need to develop and test your code.
                  </p>
               </details>
            </div>
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span> How will the solutions be evaluated and scored?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     The solutions will be evaluated and scored based on criteria such as the efficiency and accuracy of the code, the creativity of the solution, and the quality of presentation.
                  </p>
               </details>
            </div>
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span>Can I work on my solution before the hackathon?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     The meals will be provided along with some snacks and basic amenities.
                  </p>
               </details>
            </div>
            <div class="py-5">
               <details class="group">
                  <summary className="rounded-md bg-blur text-white border-2 border-orange-600 py-5 px-5 font-semibold">
                     <span> What kind of support will be available during the hackathon?</span>
                     <span class="transition group-open:rotate-180">
                        {/* <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                           <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                     </span>
                  </summary>
                  <p className="pl-4 pt-4 text-left antialiased bg-tertiary text-white p-4 mt-2 rounded-md">
                     Support during the hackathon may include access to mentors, technical support for hardware and software issues, and resources for researching algorithmic techniques.
                  </p>
               </details>
            </div>
         </div>
         </motion.div>
      </div>
</section >
</div >
);
}
export default SectionWrapper(Faq, "faq");
