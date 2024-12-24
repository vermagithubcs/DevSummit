import React from 'react';

function HackathonThemes() {
  const themes = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Explore innovative applications of AI and ML to solve real-world problems. Build intelligent systems that learn and adapt over time."
    },
    {
      title: "Blockchain & Web3",
      description: "Create decentralized applications (dApps) that leverage blockchain technology, enhancing security, transparency, and trust."
    },
    {
      title: "Internet of Things (IoT)",
      description: "Design smart devices and solutions that interact with the physical world. Use sensors and data to automate tasks and improve efficiency."
    },
    {
      title: "Sustainability & Green Tech",
      description: "Build solutions that promote environmental sustainability, such as renewable energy systems, waste reduction, and eco-friendly technology."
    },
    {
      title: "Healthcare Innovation",
      description: "Create innovative health solutions, from telemedicine to wearable devices that improve patient care and wellness."
    },
    {
      title: "FinTech",
      description: "Develop financial technologies that disrupt traditional banking systems, providing accessible and secure financial services to everyone."
    },
  ];

  return (
    <section className="hackathon-themes py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Hackathon Themes</h2>
        <p className="text-lg mb-8 text-gray-700">
          DevSummit encourages participants to work on projects related to the following themes. Choose one that aligns with your interest and skills!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{theme.title}</h3>
              <p className="text-gray-800">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HackathonThemes;
