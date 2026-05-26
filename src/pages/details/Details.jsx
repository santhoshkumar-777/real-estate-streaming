import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties } from '../../data/mockData';
import ImageGallery from './components/ImageGallery';
import PropertyInfo from './components/PropertyInfo';
import AgentContactCard from './components/AgentContactCard';
import PropertyCard from '../../components/common/PropertyCard';
import { ArrowLeft, Share2, Heart, MapPin } from 'lucide-react';

const Details = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const found = properties.find(p => p.id === parseInt(id));
    setProperty(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumbs & Actions */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        <Link to="/listing" className="flex items-center gap-2 text-slate-500 hover:text-secondary transition-colors font-medium">
          <ArrowLeft size={18} />
          Back to Listing
        </Link>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all">
            <Share2 size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all">
            <Heart size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{property.title}</h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500">
              <MapPin size={20} className="text-secondary" />
              <span className="text-lg">{property.location}</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-sm uppercase tracking-wider">
              {property.status}
            </div>
            <div className="text-3xl font-black text-primary">
              ${property.price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <ImageGallery image={property.image} />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <PropertyInfo property={property} />
            
            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Location</h3>
              <div className="aspect-video w-full bg-slate-100 rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-50" alt="Map" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
                    <MapPin size={20} className="text-secondary" />
                    <span className="font-bold text-slate-900">Open in Google Maps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <AgentContactCard agent={property.agent} />
            
            {/* Mortgage Calculator Placeholder */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">Loan Amount</p>
                  <p className="text-2xl font-bold">${(property.price * 0.8).toLocaleString()}</p>
                </div>
                <div className="h-px bg-slate-800" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Interest Rate</p>
                    <p className="text-lg font-bold">4.5%</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Duration</p>
                    <p className="text-lg font-bold">30 Years</p>
                  </div>
                </div>
                <button className="w-full bg-secondary py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all mt-4">
                  Estimate Payment
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Similar Properties */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
