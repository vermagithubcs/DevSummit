import React from 'react';

function CommunityPartnership() {
  return (
    <section className="community-partnership py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#A7FF40]">Community Partnership</h2>
        <p className="text-lg mb-8 text-gray">
          DevSummit is proud to partner with leading organizations and communities that share our vision of fostering innovation and collaboration in the tech world. 
          These partnerships are crucial in making the event a success and creating a lasting impact on participants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="partner-card bg-[#A7FF40] p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Replace with your partner's logo
              alt="Partner 1"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Partner 1</h3>
            <p className="text-gray-600">Description of the first community partner and their involvement in the event.</p>
          </div>
          <div className="partner-card bg-[#A7FF40] p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Replace with your partner's logo
              alt="Partner 2"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Partner 2</h3>
            <p className="text-gray-600">Description of the second community partner and how they are supporting the event.</p>
          </div>
          <div className="partner-card bg-[#A7FF40] p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/150" // Replace with your partner's logo
              alt="Partner 3"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Partner 3</h3>
            <p className="text-gray-600">Description of the third community partner and their role in enhancing the hackathon experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityPartnership;
