import React from 'react';
import Summit from '../assets/bgDevSummit.png'
import Jagannath from '../assets/Jagannath University.png'
import JagannathLogo from '../assets/Jagannath logo.png'
import DevSummit from '../assets/Devsummit.png';
function AboutUs() {
  return (
    <section className="about-us py-12 relative h-[150vh]" style={{ backgroundImage: `url(${Summit})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  text-center">
        <div className='DevSummit h-[80vh] w-[60vw] relative top-[10rem] right-20 px-0 py-0'>
          <h2 className="sm:text-[4xl] font-bold mb-6 text-white">DevSummit 2025</h2>
          <p className="text-base sm:text-lg mb-8 text-[#AFAFAF]">
            DevSummit 2025 is the premier edition of a 24-hour offline hackathon designed to <br /> inspire innovation and collaboration. This event brings together students, professionals, <br /> and startups nationwide to solve real-world challenges, foster creativity, and build <br /> impactful technological solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* <div className="w-full md:w-1/2">
              <img
                src="https://via.placeholder.com/500x300" // Add your own image URL
                alt="DevSummit event"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div> */}
            <div className='box relative left-20'>
              <div className="date h-20 w-40 bg-discord-green relative right-[2rem]`. ">
                <div className="location h-20 relative p-4 text-nowrap left-8 w-50 bg-white">
                  <p className='relative right-6'>5-6, April</p>
                  <p className='relative bottom-4'>Hackathon Dates</p>
                </div>
              </div>
            </div>
            <div className='box relative left-36'>
              <div className="date h-20 w-40 bg-discord-green relative right-[2rem]`. ">
                <div className="location h-20 relative p-4 text-nowrap left-8 w-72 bg-white">
                  <p>Jagannath University, Jaipur</p>
                  <p className='relative bottom-4 right-11'>Hackathon Place</p>
                </div>
              </div>
            </div>
            <div className="hackathon-btn items-center justify-around relative top-28 right-80  w-[25rem] h-20 flex">
              <button className='h-12 w-36 rounded-[3rem] text-[1rem] font-bold bg-discord-green text-nowrap'>Register Now</button>
              <p className='text-[#B4B4B4] text-[2px] relative top-3 underline '>Join Whatsapp Group</p>
            </div>
            {/* <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700">
              Join us for this exciting journey where you can learn, compete, and network with experts. Whether you're a beginner or an experienced coder, 
              there's something for everyone at DevSummit. Prepare for an experience that will shape your future and expand your horizons!
            </p>
          </div> */}
          </div>
        </div>
      </div>
      <div className="right-container right-0">
        <img className='absolute left-[63rem] bottom-[36rem]' src={DevSummit} alt="DevSummitLogo" style={{height:'100px', width:'350px'}} />
        <img className='relative left-[52rem] bottom-[23rem]' src={JagannathLogo} alt="Jagannath logo" style={{height: '100px', width: '200px'}} />
        <img className='relative bottom-[23rem] right-16' src={Jagannath} alt="Jagannath Logo" style={{float: 'right', height: '300px', width: '450px'}} />
      </div>
    </section>
  );
}

export default AboutUs;
