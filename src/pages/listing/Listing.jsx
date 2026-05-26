import { useState } from 'react';
import { motion } from 'framer-motion';
import FilterSidebar from './components/FilterSidebar';
import PropertyGrid from './components/PropertyGrid';
import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { cn } from '../../utils/cn';

const Listing = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200 px-6 md:px-12 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-slate-900">Search Properties</h1>
            <p className="text-sm text-slate-500">Discover over 15,000+ premium properties worldwide</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search location, title..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
              />
            </div>
            
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <SlidersHorizontal size={20} />
            </button>

            <div className="hidden md:flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === 'grid' ? "bg-white shadow-sm text-secondary" : "text-slate-400 hover:text-slate-600"
                )}
              >
                <LayoutGrid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === 'list' ? "bg-white shadow-sm text-secondary" : "text-slate-400 hover:text-slate-600"
                )}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex gap-10">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Grid */}
          <div className="flex-grow">
            <PropertyGrid viewMode={viewMode} />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Modal Placeholder */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            className="absolute top-0 left-0 bottom-0 w-80 bg-white p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                <SlidersHorizontal size={20} />
              </button>
            </div>
            <FilterSidebar />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Listing;
