import React from "react";

const Schedule = () => {
  const schedule = [
    {
      time: "10:00 AM - 11:00 AM",
      event: "Opening Ceremony & Keynote Address",
      description: "Welcome to the hackathon! Join us for the opening ceremony and keynote speech by our guest speaker.",
    },
    {
      time: "11:15 AM - 12:30 PM",
      event: "Team Formation & Idea Pitching",
      description: "Form your teams and pitch your ideas to other participants. Find collaborators and start brainstorming.",
    },
    {
      time: "12:30 PM - 1:30 PM",
      event: "Lunch Break",
      description: "Take a break, grab lunch, and network with other participants.",
    },
    {
      time: "1:30 PM - 3:00 PM",
      event: "Workshop: Frontend Development",
      description: "Learn the latest techniques and tools for frontend development in this hands-on workshop.",
    },
    {
      time: "3:15 PM - 4:45 PM",
      event: "Workshop: Backend Development",
      description: "Dive into backend technologies and learn how to build scalable APIs for your projects.",
    },
    {
      time: "5:00 PM - 6:00 PM",
      event: "Networking Session",
      description: "Meet other participants, mentors, and sponsors. Exchange ideas and make connections.",
    },
    {
      time: "6:15 PM - 7:00 PM",
      event: "Final Presentations & Award Ceremony",
      description: "Present your projects and celebrate the winners of the hackathon.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Event Schedule</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {schedule.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-100 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.event}</h3>
                <p className="text-gray-600">{item.time}</p>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
