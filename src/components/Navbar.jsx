import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white relative z-[1000]">
      <div className="container flex justify-between items-center rounded-[5rem] bg-[#363636] h-[10vh] px-4">
        {/* Logo */}
        <div className="logo h-[45px] w-[45px] bg-white rounded-full"></div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-6 h-6 transform transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
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
          className={`md:flex md:space-x-6 absolute md:static w-full md:w-auto bg-[#363636] md:bg-transparent transition-all duration-300 ${
            isOpen ? "top-14 left-0 p-4" : "hidden md:block"
          }`}
        >
          {["Home", "About", "Schedule", "Sponsors", "Team", "Faq", "Contact Us"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s/g, "")}`}
              className="block py-2 px-4 text-center hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Register Btn */}
        <button
          className="h-[54px] w-[165px] bg-[#00FF00] rounded-3xl text-black hover:bg-green-400 transition-all duration-300"
        >
          Register Now
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
