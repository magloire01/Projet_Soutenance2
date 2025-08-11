import React from 'react';
import Hero from '../components/Hero';
import TemplateGallery from '../components/TemplateGallery';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TemplateGallery />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;