import React from 'react';

import '../css/marquee.css';

const Marquee = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <h1 className={`bg-blur border-y border-orange-600 flex text-center justify-center font-bold ${isMobile ? 'text-3xl' : 'text-4xl'}`}>
      <span className='my-2 lg:text-2xl text-xl font-bold leading-12 text-orange-600'><a href='https://firebasestorage.googleapis.com/v0/b/algorithm-8-web.appspot.com/o/PROBLEM%20STATEMENTS.pdf?alt=media&token=5cc67855-2fb8-48db-bbb6-87032ef9a3d1' target='_blank'>Algorithm 8.0 is wrapped.</a></span>
    </h1>
  );
};

export default Marquee;

