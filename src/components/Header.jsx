import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import DevSummit from '../assets/Devsummit.png';
import Ellipse from '../assets/Ellipse.png';
import Mouse from '../svg/mouse.svg'
function Header() {
  return (
      <header className="header h-[100vh] bg-[#000000] text-white py-8 rounded-b-[10rem]">
        <Navbar />
        <div>
          <img className='h-[600px] absolute top-0 left-[15%]' src={Ellipse} alt='Ellipse'/>
        </div>
        <div className="container mx-auto flex justify-between items-center flex-col">
          <div className="text-left">
            <h1 className="text-[5rem] font-bold text-center relative z-[1000]">Unlock the power of <br />innovation with</h1>
            <div className='devsummit-logo'>
              <img className='h-[150px]' src={DevSummit} alt='Devsummit'/>
            </div>
            {/* Register and Discord Buttons */}
            <div className='socialmedia h-[70px] flex items-center justify-around relative left-[10rem] top-[1.3rem] w-96'>
              <button className='h-[54px] bg-discord-green text-black w-[165px] rounded-3xl'>Register Now</button>
              <button className='h-[54px] text-[#A7FF40] border-2 border-discord-green w-[165px] rounded-3xl'>Join Discord</button>
            </div>
          </div>
        <div className="text-right">
          {/* <Link
            to="/apply"
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all"
          >
            Apply Now
          </Link> */}
        </div>
        {/* Mouse Icon */}
        <div>
          <img className='w-[3rem] relative top-10 right-8 cursor-pointer' src={Mouse} alt='Mouse' />
        </div>
      </div>
    </header>
  );
}

export default Header;
