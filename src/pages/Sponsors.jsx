import React from "react";

const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "/images/sponsor1.png" },
    { name: "Sponsor 2", logo: "/images/sponsor2.png" },
    { name: "Sponsor 3", logo: "/images/sponsor3.png" },
    { name: "Sponsor 4", logo: "/images/sponsor4.png" },
    { name: "Sponsor 5", logo: "/images/sponsor5.png" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Sponsors</h2>

        {/* Sponsor Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
