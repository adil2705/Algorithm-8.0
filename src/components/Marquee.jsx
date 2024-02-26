import React from 'react';

import '../css/marquee.css';

const Marquee = () => {
  

  const isMobile = window.innerWidth < 768;

  return (
    <div className={`${isMobile ? 'marquee-mobile' : 'marquee'} flex flex-col justify-center items-center text-xl border-y border-orange-600 font-bold text-white bg-blur`}>
      
       <span className='mt-5 sm:text-lg font-bold leading-12  sm:text-center:text-blue-700'><a href='https://forms.gle/VRtRWuiwkDumRzEx7' target='_blank'>Problem Statement</a></span>
      
    </div>
  );
};

export default Marquee;

