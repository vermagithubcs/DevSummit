import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter for routing
import Header from './components/Header';
import HackathonThemes from './components/HackathonThemes';
import HackathonPrizes from './components/HackathonPrizes';
import Timeline from './components/Timeline';
import Sponsors from './components/Sponsors';
import CommunityPartnership from './components/CommunityPartnership';
import Mentors from './components/Mentor';
import Team from './components/Team';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Map from './components/Map';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Prizes from './components/Prizes';
function App() {
  return (
    <Router>  {/* Wrap the entire app in BrowserRouter */}
      <div className="App">
        {/* Header Section */}
        <Header />

        {/* About Us Section */}
        <AboutUs />

        {/* Prizes Section */}
        <Prizes />
        
        {/* Hackathon Themes Section */}
        <HackathonThemes />

        {/* Hackathon Prizes Section */}
        <HackathonPrizes />

        {/* Hackathon Timeline Section */}
        <Timeline />

        {/* Sponsors Section */}
        <Sponsors />

        {/* Community Partnership Section */}
        <CommunityPartnership />

        {/* Meet the Mentors Section */}
        <Mentors />

        {/* Meet the Team Section */}
        <Team />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Us Section */}
        <ContactUs />

        {/* Map Section */}
        <Map />

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
