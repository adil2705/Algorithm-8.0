import React from 'react';

const Marquee = () => {
  const marqueeContent = `
    <marquee direction="left" behavior="scroll" scrollamount="3" >
      Forms are closed for the Year 2023-2024
    </marquee>
  `;

  return (
    <div className="text-4xl font-bold text-green-500" dangerouslySetInnerHTML={{ __html: marqueeContent }}  />
    
  );
};

export default Marquee;
