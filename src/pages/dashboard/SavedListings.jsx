import React from 'react';
import { properties } from '../../data/mockData';
import PropertyCard from '../../components/common/PropertyCard';

const SavedListings = () => {
  const savedProps = properties.slice(2, 5);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Saved Listings</h1>
        <p className="text-slate-500">Properties you've bookmarked for later.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {savedProps.map((p, i) => (
          <PropertyCard key={p.id} property={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SavedListings;
