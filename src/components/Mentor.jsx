import React from 'react';

function Mentor() {
  const mentors = [
    {
      name: "John Doe",
      role: "AI Expert",
      bio: "John has over 10 years of experience in artificial intelligence and machine learning. He has worked with several tech giants and is passionate about solving real-world problems with AI.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      role: "Blockchain Developer",
      bio: "Jane is a blockchain enthusiast with experience in developing decentralized applications. She has contributed to several open-source blockchain projects and believes in the power of decentralization.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      name: "Samantha Lee",
      role: "Full-Stack Developer",
      bio: "Samantha specializes in full-stack development and has worked with several startups. She is passionate about building scalable web applications and mentoring young developers.",
      imageUrl: "https://via.placeholder.com/150"
    },
  ];

  return (
    <section className="mentors py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">Meet the Mentors</h2>
        <p className="text-lg mb-8 text-gray-700">
          Our mentors are industry experts who will guide you throughout the DevSummit hackathon. Learn from the best in the field!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-[#A7FF40] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src={mentor.imageUrl} alt={mentor.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-black mb-2">{mentor.name}</h3>
              <p className="text-lg text-gray-800 mb-2">{mentor.role}</p>
              <p className="text-gray-600">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mentor;
