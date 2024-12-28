import React from 'react'
import Prize01 from './Prizecard01'
import Prize02 from './Prizecard02'
import Prize03 from './Prizecard03'
const Prizes = () => {
  return (
    <div className='prizes h-[100vh] w-full bg-white'>
        <div className='heading h-[40vh] relative top-[4rem]'>
            <h1 className='text-[6rem] text-center'>Exciting Prizes Await!</h1>
            <p className='text-[1.3rem] relative top-[0.5rem] text-center'>Win amazing cash prizes and rewards as you showcase your skills and creativity <br /> at the hackathon. There's something exciting for everyone!</p>
        </div>
        <div className='flex w-full h-[60vh] justify-evenly items-center'>
          <Prize01 />
          <Prize02 />
          <Prize03 />
        </div>
    </div>
  )
}

export default Prizes
