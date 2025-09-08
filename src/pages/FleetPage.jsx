import React from 'react';
import Contact from '../components/sections/Contact';
import Gallery from '../components/sections/Gallery';

const FleetPage = ({ handleCall, handleReservation }) => {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-200">
      <section className="section-padding">
        <div className="container-custom">
          <Gallery />
        </div>
      </section><Contact handleCall={handleCall} handleReservation={handleReservation} />
    </div>
  );
};

export default FleetPage;
