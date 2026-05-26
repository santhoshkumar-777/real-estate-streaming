import React from 'react';
import { motion } from 'framer-motion';

const TrustedPartners = () => {
  const partners = [
    'Zillow', 'Airbnb', 'Realtor', 'Redfin', 'Compass', 'Trulia'
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-10">Trusted by the best in the industry</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.span 
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black text-slate-400 tracking-tighter"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
