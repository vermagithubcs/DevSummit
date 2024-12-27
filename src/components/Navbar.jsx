import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white relative z-[1000] ">
      <div className="container flex justify-between items-center rounded-[5rem] bg-[#363636] h-[10vh]">
        {/* Logo */}
        <div className="logo h-[45px] w-[45px] bg-white rounded-full">

        </div>
        {/* <div className="text-2xl font-bold">
          <Link to="/">Hackathon</Link>
        </div> */}  

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
          className={`md:flex md:space-x-6 absolute md:static w-full md:w-auto ${
            isOpen ? "top-14 left-0" : "hidden md:block"
          }`}
        >
          <Link
            to="/"
            className="block py-2 px-4 text-center"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-center"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/schedule"
            className="block py-2 px-4 text-center "
            onClick={() => setIsOpen(false)}
          >
            Schedule
          </Link>
          <Link
            to="/sponsors"
            className="block py-2 px-4 text-center"
            onClick={() => setIsOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            to="/team"
            className="block py-2 px-4 text-center"
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/faq"
            className="block py-2 px-4 text-center "
            onClick={() => setIsOpen(false)}
          >
            Faq
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-center "
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
        {/* Register Btn */}
        <button
          className="h-[54px] w-[165px] bg-[#00FF00] rounded-3xl text-black
"
        >
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
