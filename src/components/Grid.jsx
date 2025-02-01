import React from 'react'

const Grid = () => {
  return (
    <>
    <div className='grid grid-cols-5 gap-x-40 gap-y-8    relative left-[21%] top-14 w-60 h-60'>
        {Array.from({length: 20}).map((item,index) =>(
        <div key={index} className='w-28 h-28 bg-white rounded-md'></div>
        ))}
    </div>
    </>
  );
};

export default Grid
