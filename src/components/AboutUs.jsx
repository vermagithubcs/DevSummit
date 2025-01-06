import React from 'react';

function AboutUs() {
  return (
    <section className="about-us py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#A7FF40]">About DevSummit</h2>
        <p className="text-base sm:text-lg mb-8 text-gray-700">
          DevSummit is a premier hackathon event that brings together passionate developers, designers, and innovators from around the world.
          It is an opportunity to showcase your skills, collaborate with like-minded individuals, and solve real-world problems using cutting-edge technology.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/500x300" // Add your own image URL
              alt="DevSummit event"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg text-gray-700">
              Join us for this exciting journey where you can learn, compete, and network with experts. Whether you're a beginner or an experienced coder, 
              there's something for everyone at DevSummit. Prepare for an experience that will shape your future and expand your horizons!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
