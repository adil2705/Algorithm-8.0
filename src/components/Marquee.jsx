import React from 'react';

import '../css/marquee.css';

const Marquee = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <h1 className={`bg-blur border-y border-orange-600 flex text-center justify-center font-bold ${isMobile ? 'text-3xl' : 'text-4xl'}`}>
      <span className='my-2 lg:text-2xl text-xl font-bold leading-12 text-orange-600'><a href='https://forms.gle/VRtRWuiwkDumRzEx7' target='_blank'>Problem Statement</a></span>
    </h1>
  );
};

export default Marquee;

