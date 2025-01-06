import React from 'react';

function Timeline() {
  const events = [
    {
      date: "2024-01-15",
      title: "Registration Opens",
      description: "Sign up for DevSummit 2024 and start preparing your ideas. Get ready to bring your A-game!",
    },
    {
      date: "2024-02-01",
      title: "Hackathon Kickoff",
      description: "The official start of the hackathon. Get your teams together, and let's start building!",
    },
    {
      date: "2024-02-15",
      title: "Midway Check-in",
      description: "Teams will present their progress so far, and mentors will provide guidance and feedback.",
    },
    {
      date: "2024-03-01",
      title: "Final Submissions",
      description: "Submit your final projects to the judges before the deadline. Make sure everything is polished!",
    },
    {
      date: "2024-03-10",
      title: "DevSummit Demo Day",
      description: "Teams will present their final projects to the judges and the DevSummit community. Prizes will be awarded!",
    },
  ];

  return (
    <section className="timeline py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">Hackathon Timeline</h2>
        <p className="text-lg mb-8 text-gray-700">
          Stay on track with our DevSummit hackathon timeline. Mark these important dates and get ready for an unforgettable experience!
        </p>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="event bg-[#A7FF40] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-black mb-2">{event.title}</h3>
              <p className="text-lg text-gray-800 mb-2">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
