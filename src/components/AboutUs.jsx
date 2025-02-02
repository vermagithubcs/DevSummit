import React from "react";
import Summit from "../assets/bgDevSummit.png";
import Jagannath from "../assets/Jagannath University.png";
import JagannathLogo from "../assets/Jagannath logo.png";
import DevSummit from "../assets/Devsummit.png";
import Ellipse from "../assets/Ellipse.png";
function AboutUs() {
  return (
    <section
      className="about-us py-12 relative h-[150vh]"
      style={{
        backgroundImage: `url(${Summit})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  text-center">
        <div className="DevSummit h-[80vh] w-[60vw] relative top-[10rem] right-20 px-0 py-0">
          <h2 className="text-2xl text-start left-24 relative top-12 font-bold mb-6 text-white">
            DevSummit 2025
          </h2>
          <p className="mb-8 text-start relative left-24 top-16 text-[#AFAFAF]">
            DevSummit 2025 is the premier edition of a 24-hour offline hackathon
            designed to <br /> inspire innovation and collaboration. This event
            brings together students, professionals, <br /> and startups
            nationwide to solve real-world challenges, foster creativity, and
            build <br /> impactful technological solutions.
          </p>
          <p className="text-start text-[#AFAFAF] relative left-24 top-16 underline underline-offset-1 cursor-pointer">Read more...</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="box relative left-20 top-24">
              <div className="date h-20 w-40 bg-discord-green relative right-[2rem]`. ">
                <div className="location h-20 relative p-4 text-nowrap left-8 w-50 bg-white">
                  <p className="relative right-6">5-6, April</p>
                  <p className="relative bottom-4">Hackathon Dates</p>
                </div>
              </div>
            </div>
            <div className="box relative left-36 top-24">
              <div className="date h-20 w-40 bg-discord-green relative right-[2rem]`. ">
                <div className="location h-20 relative p-4 text-nowrap left-8 w-72 bg-white">
                  <p>Jagannath University, Jaipur</p>
                  <p className="relative bottom-4 right-11">Hackathon Place</p>
                </div>
              </div>
            </div>
            <div className="hackathon-btn items-center justify-around relative top-56 right-80  w-[25rem] h-20 flex">
              <button className="h-12 w-36 rounded-[3rem] text-[1rem] font-bold bg-discord-green text-nowrap">
                Register Now
              </button>
              <p className="text-[#B4B4B4] text-[2px] relative top-3 underline cursor-pointer">
                Join Whatsapp Group
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container right-0">
        <div className="devsummit flex h-40 w-[20%] relative left-[60rem] bottom-[20rem] items-center justify-evenly flex-row-reverse">
          <img
            src={DevSummit}
            alt="DevSummitLogo"
            style={{ height: "100px", width: "300px" }}
          />
          <img
            src={JagannathLogo}
            alt="Jagannath logo"
            style={{ height: "100px", width: "200px" }}
          />
        </div>
        <img
          className="relative bottom-[20rem] right-16"
          src={Jagannath}
          alt="Jagannath Logo"
          style={{ float: "right", height: "300px", width: "450px" }}
        />
      </div>
    </section>
  );
}

export default AboutUs;
