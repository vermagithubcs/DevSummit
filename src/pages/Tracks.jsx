import React from 'react';
import Summit from '../assets/bgDevSummit.png';
import Blockchain from '../assets/blockchain.png';
import Healthcare from '../assets/healthcare.png';
import Innovation from '../assets/Innovation.png';
import Iot from '../assets/Iot.png'
import Ai from '../assets/Ai.png'
import Social from '../assets/socialskills.png';

const Track = () => {
    return (
        <>
            <header className="header lg:h-[200vh] h-[90vh] text-white py-8" style={{ backgroundImage: `url(${Summit})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='text flex flex-col lg:flex-row h-auto relative top-[5rem] items-center justify-around w-full px-4'>
                    <h1 className='text-white text-center lg:text-left'>Explore Hackathon <br /> Tracks in Depth</h1>
                    <div className="start text-center lg:text-left">
                        <h3 className='text-[1.2rem] font-normal'>Explore exciting tracks designed to inspire <br /> innovation and creativity. Solve real challenges <br /> and shape the future with your ideas.</h3>
                        <button className='h-12 w-36 font-bold bg-discord-green text-black rounded-[2rem] mt-4'>Get Started</button>
                    </div>
                </div>
                <div className="technology h-auto relative top-[10rem] w-[90%] mx-auto">
                    <div className="tech-01 flex flex-col lg:flex-row h-auto w-full items-center justify-around mb-4">
                        <div className="box1 h-[15rem] w-[15rem] bg-white flex flex-col items-center justify-center m-4">
                            <img className='h-full w-full object-contain mb-4' src={Blockchain} alt="blockchain" />
                            <p className="text-black mt-2">Blockchain</p>
                        </div>
                        <div className="box2 h-[15rem] w-[15rem] bg-white flex flex-col items-center justify-center m-4">
                            <img className='h-full w-full object-contain mb-4' src={Healthcare} alt="HealthCare" />
                            <p className="text-black mt-2">Healthcare</p>
                        </div>
                        <div className="box3 h-[15rem] w-[15rem] bg-white flex flex-col items-center justify-center m-4">
                            <img className='h-full w-full object-contain mb-4' src={Ai} alt="Ai/Ml" />
                            <p className="text-black mt-2">AI/ML</p>
                        </div>
                    </div>
                    <div className="tech-01 flex flex-col lg:flex-row h-auto w-full items-center justify-around">
                        <div className="box1 h-[15rem] w-[15rem] bg-white flex flex-col items-center justify-center m-4">
                            <img className='h-full w-full object-contain mb-4' src={Innovation} alt="Innovation" />
                            <p className="text-center mt-2 text-black">Innovation</p>
                        </div>
                        <div className="box2 h-[15rem] w-[15rem] bg-white flex flex-col items-center justify-center m-4">
                            <img className='h-full w-full object-contain mb-4' src={Iot} alt="IOT" />
                            <p className="text-center mt-2 text-black">Internet of Things</p>
                        </div>
                        <div className="box3 h-[15rem] w-[15rem] bg-white flex flex-col items-center justify-center m-4">
                            <img className='h-full w-full object-contain mb-4' src={Social} alt="social skills" />
                            <p className="text-center mt-2 text-black">Social Skills</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Track
