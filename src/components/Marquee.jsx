import React from 'react';

const Marquee = () => {
  const marqueeContent = `
    <marquee direction="left" behavior="scroll" scrollamount="3" >
  
    </marquee>
  `;

  return (
    <div className="text-4xl -top-2 font-bold text-white" dangerouslySetInnerHTML={{ __html: marqueeContent }}  />
    
  );
};

export default Marquee;