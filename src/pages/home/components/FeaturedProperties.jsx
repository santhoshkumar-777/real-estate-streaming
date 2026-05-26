import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { properties } from '../../../data/mockData';
import PropertyCard from '../../../components/common/PropertyCard';
import { Link } from 'react-router-dom';

const FeaturedProperties = () => {
  const featured = properties.filter(p => p.featured);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold uppercase tracking-widest text-sm"
            >
              Exclusive Offers
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Featured Properties
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/listing" className="group flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              Explore All Properties
              <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
