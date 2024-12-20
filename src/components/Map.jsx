import React from 'react';

function Map() {
  return (
    <section className="map py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Event Location</h2>
        <p className="text-lg mb-8 text-gray-700">
          Find us at the following location for DevSummit 2024. Get directions below.
        </p>
        <div className="map-container">
          <iframe
            title="Event Location"
            width="100%"
            height="450"
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
