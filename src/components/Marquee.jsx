import React from 'react';

import '../css/marquee.css';

const Marquee = () => {
  const marqueeContent = "Select Your Problem Statement and fill this form as early as possible:";

  const isMobile = window.innerWidth < 768;

  return (
    <div className={`${isMobile ? 'marquee-mobile' : 'marquee'} text-xl border-y border-orange-600 font-bold text-white bg-blur flex justifu-center`}>
      <p>{marqueeContent} <span className=' text-lg font-bold leading-12 text-blue-700'><a href='https://forms.gle/VRtRWuiwkDumRzEx7' target='_blank'>Click here</a></span></p>
      
    </div>
  );
};

export default Marquee;

