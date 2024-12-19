import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center">
      <div className="container mx-auto text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to the Hackathon 2024!
        </h1>
        <p className="text-lg mb-6">
          Join us for an exciting and innovative event where you can bring your ideas to life, solve real-world problems, and collaborate with passionate developers and designers!
        </p>

        <div className="flex justify-center space-x-4">
          {/* Button to navigate to registration */}
          <Link
            to="/register"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100"
          >
            Register Now
          </Link>
          
          {/* Button to navigate to the About page */}
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
