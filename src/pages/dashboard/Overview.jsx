import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Heart, MessageSquare, PlusCircle } from 'lucide-react';

const Overview = () => {
  const stats = [
    { label: 'Total Views', value: '45,231', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Saved Items', value: '1,284', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'Messages', value: '24', icon: MessageSquare, color: 'text-secondary', bg: 'bg-secondary/10' },
    { label: 'Growth', value: '+12.5%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Performance Overview</h1>
          <p className="text-slate-500">Track how your properties are performing this month.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg active:scale-95">
          <PlusCircle size={20} />
          Add New Property
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.bg, stat.color)}>
              <stat.icon size={24} />
            </div>
            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm h-80 flex flex-col justify-center items-center text-center">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
            <TrendingUp size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Analytics Chart</h3>
          <p className="text-slate-500 text-sm">Visual data of your property reach will appear here.</p>
        </div>
        
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { action: 'Someone liked your', target: 'Modern Villa', time: '2 hours ago' },
              { action: 'New message from', target: 'John Doe', time: '5 hours ago' },
              { action: 'Price updated for', target: 'Penthouse', time: 'Yesterday' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {activity.action} <span className="font-bold">{activity.target}</span>
                  </p>
                  <p className="text-xs text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple helper to avoid import error if cn is not in scope in this file
const cn = (...inputs) => inputs.filter(Boolean).join(' ');

export default Overview;
