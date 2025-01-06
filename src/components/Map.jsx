import React from 'react';

function Map() {
  return (
    <section className="map py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#A7FF40]">Event Location</h2>
        <p className="text-base sm:text-lg mb-8 text-gray-700">
          Find us at the following location for DevSummit 2024. Get directions below.
        </p>
        <div className="map-container relative overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            title="Event Location"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=DevSummit+Location+Address"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Map;
