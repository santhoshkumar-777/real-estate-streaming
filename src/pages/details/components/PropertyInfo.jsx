import React from 'react';
import { Bed, Bath, Square, CheckCircle2, Waves, Wind, ShieldCheck, Car } from 'lucide-react';

const PropertyInfo = ({ property }) => {
  const amenities = [
    { icon: Waves, name: 'Swimming Pool' },
    { icon: Wind, name: 'Air Conditioning' },
    { icon: ShieldCheck, name: '24/7 Security' },
    { icon: Car, name: 'Private Garage' },
    { icon: CheckCircle2, name: 'Smart Home System' },
    { icon: CheckCircle2, name: 'Home Theater' },
  ];

  return (
    <div className="space-y-12">
      {/* Key Details */}
      <div className="flex flex-wrap gap-8 items-center bg-slate-50 p-8 rounded-3xl border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm">
            <Bed size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{property.beds}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Bedrooms</p>
          </div>
        </div>
        <div className="h-10 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm">
            <Bath size={24} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{property.baths}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Bathrooms</p>
          </div>
        </div>
        <div className="h-10 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm">
            <Square size={20} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{property.sqft}</p>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Square Ft</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Description</h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          Experience unparalleled luxury in this stunning {property.type}. Located in the heart of {property.location}, 
          this property offers breathtaking views and state-of-the-art finishes. Every detail has been carefully 
          curated to provide the ultimate living experience. From the expansive open-plan living areas to 
          the private outdoor spaces, this home is designed for both relaxation and entertainment.
        </p>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
                <item.icon size={20} />
              </div>
              <span className="text-slate-600 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
