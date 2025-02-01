import React from "react";
import bgImage from "../assets/bgDevSummit.png";
import boxSvg from "../svg/box.svg";

const Schedule = () => {
  const schedule = [
    { time: "8:00 AM - 9:00 AM:", event: "Registration & Welcome Breakfast" },
    { time: "9:00 AM - 9:30 AM:", event: "Opening Ceremony" },
    { time: "9:00 AM - 9:30 AM:", event: "Opening Ceremony" },
    { time: "8:00 AM - 9:00 AM:", event: "Registration & Welcome Breakfast" },
    { time: "9:00 AM - 9:30 AM:", event: "Opening Ceremony" },
    { time: "9:00 AM - 9:30 AM:", event: "Opening Ceremony" },
    { time: "8:00 AM - 9:00 AM:", event: "Registration & Welcome Breakfast" },
  ];

  return (
    <>
      <section
        className="min-h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Hackathon Tracker */}
        <div className="schedule flex flex-col items-center">
          <div className="ready h-48 mt-10 w-full max-w-4xl bg-white rounded-3xl flex flex-col md:flex-row items-center justify-around p-4">
            <div className="ready-btn">
              <button className="h-32 w-56 bg-discord-green text-xl rounded-3xl cursor-pointer font-mono font-bold">
                Get Ready for
              </button>
            </div>
            <div className="time-team h-28 flex flex-wrap justify-around w-full">
              <div className="team text-center">
                <h1 className="text-3xl font-mono">100+</h1>
                <p className="font-thin text-gray-400">Teams</p>
              </div>
              <div className="coding text-center">
                <h1 className="text-3xl font-mono">24 Hours</h1>
                <p className="font-thin text-gray-400">Non-Stop Coding</p>
              </div>
              <div className="Mentors text-center">
                <h1 className="text-3xl font-mono">20+ Mentors</h1>
                <p className="font-thin text-gray-400">Industry Experts</p>
              </div>
              <div className="Track text-center">
                <h1 className="text-3xl font-mono">6 Tracks</h1>
                <p className="font-thin text-gray-400">To innovate</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-white text-5xl text-center mt-10">
          Hackathon Schedule
        </h1>

        {/* Day -1 & Day - 2 svg */}
        <div className="Hackathon-schedule flex relative mt-10 h-60 items-center justify-around w-full">
          <div className="svg relative">
            <img src={boxSvg} alt="boxIcon" />
            <h1 className="absolute top-[4rem] text-black left-1/4 text-4xl md:text-8xl font-semibold">
              Day 1
            </h1>
          </div>
          <div className="svg relative">
            <img src={boxSvg} alt="boxIcon" />
            <h1 className="absolute top-[4rem] text-black right-1/4 text-4xl md:text-8xl font-semibold">
              Day 2
            </h1>
          </div>
        </div>

        {/* Hackathon Schedule */}
        <div className="flex relative mt-10 justify-center items-center min-h-screen">
          <div className="w-11/12 md:w-3/4 bg-white shadow-lg rounded-lg border border-blue-400">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x">
              {/* Day 1 Schedule */}
              <div className="p-6">
                <h2 className="bg-[#CBFB95] text-center py-2 font-semibold rounded-t-lg">
                  Hackathon Day-1 Schedule
                </h2>
                {schedule.map((item, index) => (
                  <div key={index} className="grid gap-4 mt-3 px-4 md:px-20">
                    <span className="font-bold">{item.time}</span>
                    <span className="text-gray-700">{item.event}</span>
                  </div>
                ))}
              </div>

              {/* Day 2 Schedule */}
              <div className="p-6">
                <h2 className="bg-[#CBFB95] text-center py-2 font-semibold rounded-t-lg">
                  Hackathon Day-2 Schedule
                </h2>
                {schedule.map((item, index) => (
                  <div key={index} className="grid gap-4 mt-3 px-4 md:px-20 text-nowrap">
                    <span className="font-bold">{item.time}</span>
                    <span className="text-gray-700">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
