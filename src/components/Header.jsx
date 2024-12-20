import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header bg-blue-600 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <h1 className="text-4xl font-bold">DevSummit 2024</h1>
          <p className="text-lg mt-2">The Ultimate Hackathon for Innovators & Creators</p>
          <p className="text-md mt-2">Date: 25th - 27th December 2024</p>
        </div>
        <div className="text-right">
          <Link
            to="/apply"
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
