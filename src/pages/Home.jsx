import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials'; // <--- Import ini

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Testimonials /> {/* <--- Pasang di sini */}
    </>
  );
};

export default Home;