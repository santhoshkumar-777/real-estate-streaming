import { motion } from 'framer-motion';
import { Search, MapPin, Building, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Luxury House"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-widest">
            Premium Real Estate
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
            Find Your <span className="text-secondary italic">Dream</span> <br /> 
            Luxury Living Space
          </h1>
          <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
            Discover a curated collection of premium properties across the most exclusive locations. Your journey to a perfect home starts here.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 bg-white p-4 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-4 max-w-3xl"
          >
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="flex items-center gap-3 px-4 py-2">
                <MapPin className="text-secondary" size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Location</span>
                  <input type="text" placeholder="Where to?" className="text-sm font-medium focus:outline-none w-full" />
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2">
                <Building className="text-secondary" size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Type</span>
                  <select className="text-sm font-medium focus:outline-none bg-transparent w-full cursor-pointer">
                    <option>All Types</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Apartment</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2">
                <DollarSign className="text-secondary" size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Budget</span>
                  <input type="text" placeholder="Max Price" className="text-sm font-medium focus:outline-none w-full" />
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary text-white p-4 rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 font-bold group">
              <Search size={20} className="group-hover:scale-110 transition-transform" />
              <span className="md:hidden">Search</span>
            </button>
          </motion.div>

          <div className="flex items-center gap-8 mt-12">
            {[
              { label: 'Properties', value: '12k+' },
              { label: 'Happy Clients', value: '8k+' },
              { label: 'Awards Won', value: '25+' }
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute bottom-20 right-24 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
            <Building size={24} />
          </div>
          <div>
            <p className="text-white font-bold">New Listing</p>
            <p className="text-slate-300 text-xs">Beverly Hills Mansion</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
