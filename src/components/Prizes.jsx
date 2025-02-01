import React from 'react';
import Prize01 from './Prizecard01';
import Prize02 from './Prizecard02';
import Prize03 from './Prizecard03';
import Summit from '../assets/bgDevSummit.png'
const Prizes = () => {
  return (
    <div className="prizes h-[130vh] border border-black w-full bg-white text-black rounded-b-[5rem]">
      <div className="heading min-h-[40vh]">
        <h1 className="text-4xl md:text-7xl text-center font-bold text-black relative top-8">Exciting Prizes Await!</h1>
        <p className="text-base md:text-lg mt-4 text-center px-4 relative top-8 text-black">
          Win amazing cash prizes and rewards as you showcase your skills and creativity <br /> 
          at the hackathon. There's something exciting for everyone!
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly items-center min-h-[60vh] gap-8">
        <Prize01 />
        <Prize02 />
        <Prize03 />
      </div>
    </div>
  );
};

export default Prizes;
