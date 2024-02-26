import React from 'react';

import '../css/marquee.css';

const Marquee = () => {
  

  const isMobile = window.innerWidth < 768;

  return (
    
    <h1 className={`flex text-center justify-center font-poppins font-semibold ${isMobile ? 'text-3xl' : 'text-4xl'} text-white drop-shadow-[0_1.2px_1.2px_rgba(234,88,12,1.0)]`}>
    <span className='mt-5 lg:text-2xl text-lg font-bold leading-12  text-blue-700'><a href='https://forms.gle/VRtRWuiwkDumRzEx7' target='_blank'>Problem Statement</a></span>
     
  </h1>
      
  );
};

export default Marquee;

