import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const PropertyCard = ({ property, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <Link to={`/details/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md",
            property.status === 'For Sale' ? "bg-secondary/90 text-white" : "bg-emerald-500/90 text-white"
          )}>
            {property.status}
          </span>
          {property.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/90 text-slate-900 backdrop-blur-md">
              Featured
            </span>
          )}
        </div>

        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all duration-300 shadow-lg">
          <Heart size={20} />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="text-white">
            <p className="text-2xl font-bold">${property.price.toLocaleString()}</p>
          </div>
          <div className="bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-slate-900 text-xs font-bold">
            <Star size={14} className="fill-accent text-accent" />
            {property.rating}
          </div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors truncate">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-slate-500 mt-1">
            <MapPin size={14} />
            <span className="text-sm truncate">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-slate-50">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-slate-900">
              <Bed size={18} />
              <span className="font-bold">{property.beds}</span>
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Beds</span>
          </div>
          <div className="h-8 w-px bg-slate-100" />
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-slate-900">
              <Bath size={18} />
              <span className="font-bold">{property.baths}</span>
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Baths</span>
          </div>
          <div className="h-8 w-px bg-slate-100" />
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-slate-900">
              <Square size={16} />
              <span className="font-bold">{property.sqft}</span>
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Sq Ft</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <img src={property.agent.image} className="w-8 h-8 rounded-full object-cover border border-slate-100" alt="" />
            <span className="text-xs font-medium text-slate-600">{property.agent.name}</span>
          </div>
          <button className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
