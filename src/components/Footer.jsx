import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.css";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Hackathon 2024
          </h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/schedule"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Schedule
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Hackathon 2024. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
