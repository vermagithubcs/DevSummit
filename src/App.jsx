import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Form from "./components/Form"; // Import Form component

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer at the bottom */}
        <Footer />

        {/* Hackathon Registration Form */}
        <div className="mt-10 bg-gray-100 py-6">
          <Form />
        </div>
      </div>
    </Router>
  );
}

export default App;
