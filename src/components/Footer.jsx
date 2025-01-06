import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-[#A7FF40] text-black py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">DevSummit</h3>
          <p className="text-sm">The ultimate hackathon event to bring together innovators and creators.</p>
        </div>

        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        <div className="text-sm mb-6">
          <a href="/terms" className="text-black hover:text-blue-300">Terms & Conditions</a> | 
          <a href="/privacy" className="text-black hover:text-blue-300"> Privacy Policy</a>
        </div>

        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} DevSummit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
