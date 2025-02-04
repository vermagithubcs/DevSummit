import React from 'react'
import Summit from '../assets/bgDevSummit.png'
import GridSupports from '../components/GridSupports'
const Sponsors = () => {
  return (
    <>
    <div className='h-[130vh] w-screen' style={{backgroundImage: `url(${Summit})`, backgroundPosition: "cover", backgroundPosition: "center"}}>
      <h1 className='text-center text-white text-6xl relative top-16 font-mono'>Our Supporters</h1>
      <GridSupports />
    </div>
    </>
  )
}

export default Sponsors
