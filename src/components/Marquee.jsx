import React from 'react';
import '../css/marquee.css';

const Marquee = () => {
  const marqueeContent = "Problem statement to be announced soon.";

  return (
    <div className="marquee text-2xl -top-2 font-bold text-white">
      <p>{marqueeContent}</p>
    </div>
  );
};

export default Marquee;
