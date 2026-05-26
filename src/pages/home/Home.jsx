import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeaturedProperties from './components/FeaturedProperties';
import TrustedPartners from './components/TrustedPartners';
import Testimonials from './components/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <Hero />
      <TrustedPartners />
      <FeaturedProperties />
      <Stats />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
