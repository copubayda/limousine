import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';

const HomePage = ({ handleCall, handleReservation }) => {
  return (
    <>
      <Hero handleReservation={handleReservation} />
      <About />
      <Features />
      <Services handleCall={handleCall} />
      {/* Gallery removed from HomePage as it is already in Fleet */}
      <Pricing />
      <Testimonials />
      <Contact handleCall={handleCall} handleReservation={handleReservation} />
    </>
  );
};

export default HomePage;
