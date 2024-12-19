import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Hackathon</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`md:flex md:space-x-6 absolute md:static bg-blue-600 w-full md:w-auto ${
            isOpen ? "top-14 left-0" : "hidden md:block"
          }`}
        >
          <Link
            to="/"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/schedule"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            to="/sponsors"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            to="/team"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/faq"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-center hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
