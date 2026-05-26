import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: 'Property Listings', value: '15,000+' },
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Professional Agents', value: '500+' },
    { label: 'Awards Winning', value: '150+' },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.value}</h3>
              <p className="text-slate-400 font-medium uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
