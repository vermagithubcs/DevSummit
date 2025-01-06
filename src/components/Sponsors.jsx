import React from 'react';

function Sponsors() {
  const sponsors = [
    {
      name: "Tech Corp",
      logoUrl: "https://via.placeholder.com/200x100?text=Tech+Corp"
    },
    {
      name: "InnovateX",
      logoUrl: "https://via.placeholder.com/200x100?text=InnovateX"
    },
    {
      name: "Dev Solutions",
      logoUrl: "https://via.placeholder.com/200x100?text=Dev+Solutions"
    },
    {
      name: "CodeMasters",
      logoUrl: "https://via.placeholder.com/200x100?text=CodeMasters"
    },
    {
      name: "Web Builders",
      logoUrl: "https://via.placeholder.com/200x100?text=Web+Builders"
    },
    {
      name: "AI Ventures",
      logoUrl: "https://via.placeholder.com/200x100?text=AI+Ventures"
    },
  ];

  return (
    <section className="sponsors py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">Our Sponsors</h2>
        <p className="text-lg mb-8 text-gray-700">
          A big thank you to our sponsors who have made DevSummit 2024 possible. Your support helps us bring this amazing event to life!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-card bg-[#A7FF40] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src={sponsor.logoUrl} alt={sponsor.name} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black">{sponsor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
