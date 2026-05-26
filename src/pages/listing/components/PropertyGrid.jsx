import { properties } from '../../../data/mockData';
import PropertyCard from '../../../components/common/PropertyCard';

const PropertyGrid = ({ viewMode }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-slate-500 text-sm">Showing <span className="text-slate-900 font-bold">{properties.length}</span> results</p>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sort By:</span>
          <select className="bg-transparent text-sm font-bold text-slate-900 focus:outline-none cursor-pointer">
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 gap-8" 
          : "flex flex-col gap-8"
      }>
        {properties.map((property, index) => (
          <PropertyCard 
            key={property.id} 
            property={property} 
            index={index} 
            isList={viewMode === 'list'}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 pt-12">
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-all">
          1
        </button>
        <button className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
          2
        </button>
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-all">
          3
        </button>
        <span className="text-slate-300">...</span>
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-all">
          12
        </button>
      </div>
    </div>
  );
};

export default PropertyGrid;
