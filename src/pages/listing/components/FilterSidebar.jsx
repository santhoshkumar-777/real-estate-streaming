
const FilterSidebar = () => {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Property Type</h3>
        <div className="space-y-3">
          {['All Properties', 'Villa', 'Apartment', 'Penthouse', 'Loft', 'Estate'].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-secondary focus:ring-secondary cursor-pointer" />
              <span className="text-sm text-slate-600 group-hover:text-secondary transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Price Range</h3>
        <div className="space-y-4">
          <input type="range" min="0" max="10000000" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary" />
          <div className="flex justify-between text-xs font-bold text-slate-500">
            <span>$0</span>
            <span>$10M+</span>
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Rooms */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Bedrooms</h3>
        <div className="grid grid-cols-4 gap-2">
          {['Any', '1+', '2+', '3+', '4+', '5+'].map((num) => (
            <button 
              key={num}
              className="py-2 text-xs font-bold border border-slate-200 rounded-lg hover:border-secondary hover:text-secondary transition-all"
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Amenities */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Amenities</h3>
        <div className="space-y-3">
          {['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Smart Home'].map((amenity) => (
            <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-secondary focus:ring-secondary cursor-pointer" />
              <span className="text-sm text-slate-600 group-hover:text-secondary transition-colors">{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95">
        Apply Filters
      </button>
      <button className="w-full bg-transparent text-slate-400 py-2 font-bold text-sm hover:text-slate-600 transition-all">
        Reset All
      </button>
    </div>
  );
};

export default FilterSidebar;
