import React from 'react';

import '../css/marquee.css';

const Marquee = () => {
  const marqueeContent = "Problem statement to be announced on Monday (26th Feb 2024)";

  const isMobile = window.innerWidth < 768;

  return (
    <div className={`${isMobile ? 'marquee-mobile' : 'marquee'} text-xl border-y border-orange-600 font-bold text-white bg-blur`}>
      <p>{marqueeContent}</p>
    </div>
  );
};

export default Marquee;
