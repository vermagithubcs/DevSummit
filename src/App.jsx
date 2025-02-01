import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter for routing
import Header from "./components/Header";
import HackathonThemes from "./components/HackathonThemes";
import HackathonPrizes from "./components/HackathonPrizes";
import Timeline from "./components/Timeline";
import CommunityPartnership from "./components/CommunityPartnership";
import Mentors from "./components/Mentor";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Map from "./components/Map";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Prizes from "./components/Prizes";
import Tracks from "./pages/Tracks";
import Schedule from "./pages/Schedule";
import Sponsors from "./components/Sponsors";
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the entire app in BrowserRouter */}
      <div className="App">
        {/* Header Section */}
        <Header />

        {/* About Us Section */}
        <AboutUs />

        {/* Track Section */}
        <Tracks />

        {/* Prizes Section */}
        <Prizes />

        {/* Hackathon Schedule  */}
        <Schedule />

        {/* Meet the Mentors Section */}
        <Mentors />

        {/* Sponsors Section */}
        <Sponsors />

        {/* FAQ Section */}
        <FAQ />
      </div>
    </Router>
  );
}

export default App;
