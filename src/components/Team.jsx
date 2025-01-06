import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: "Satyam Badmosh",
      role: "Event Coordinator",
      bio: "Satyam is the mastermind behind DevSummit. Passionate about organizing events and creating a platform for innovation, he ensures everything runs smoothly.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Yajju Bhau",
      role: "Technical Lead",
      bio: "Priya is responsible for overseeing all technical aspects of the hackathon. She is passionate about coding and loves mentoring young developers.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Ram bhai",
      role: "Marketing Lead",
      bio: "Ravi is the marketing guru of DevSummit, making sure the event reaches a wide audience and ensuring sponsors and participants are engaged.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Princess Bhau",
      role: "Logistics Manager",
      bio: "Anjali takes care of the event logistics and is the person responsible for ensuring that everything is in place for the event to run without any hitches.",
      imageUrl: "https://via.placeholder.com/150"
    },
  ];

  return (
    <section className="team py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">Meet the Team</h2>
        <p className="text-lg mb-8 text-gray-700">
          The DevSummit team is a group of passionate individuals working hard to bring you the best possible hackathon experience. Get to know the team behind the event!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member bg-[#A7FF40] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-[#A7FF40] mb-2">{member.name}</h3>
              <p className="text-lg text-gray-800 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
