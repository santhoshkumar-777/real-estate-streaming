import React from 'react';
import { User, Mail, Phone, MapPin, Camera, Shield } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">User Profile</h1>
        <p className="text-slate-500">Manage your personal information and security.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-primary to-secondary relative">
          <button className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-xl hover:bg-white/30 transition-all">
            <Camera size={20} />
          </button>
        </div>
        <div className="px-12 pb-12">
          <div className="relative -mt-16 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
              className="w-32 h-32 rounded-3xl border-8 border-white object-cover shadow-xl" 
              alt="" 
            />
            <div className="absolute bottom-2 left-24 bg-emerald-500 w-5 h-5 rounded-full border-4 border-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Personal Details</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                  <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <User size={18} className="text-slate-400" />
                    <input type="text" defaultValue="Alex Thompson" className="bg-transparent font-medium text-slate-900 focus:outline-none w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                  <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <Mail size={18} className="text-slate-400" />
                    <input type="email" defaultValue="alex.t@example.com" className="bg-transparent font-medium text-slate-900 focus:outline-none w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                  <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <Phone size={18} className="text-slate-400" />
                    <input type="text" defaultValue="+1 (555) 123-4567" className="bg-transparent font-medium text-slate-900 focus:outline-none w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Account Security</h3>
              <div className="space-y-4">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-500 shadow-sm">
                      <Shield size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Two-Factor Auth</p>
                      <p className="text-xs text-slate-400">Currently Enabled</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-secondary uppercase tracking-widest">Manage</button>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-sm mb-4">Change Password</h4>
                  <div className="space-y-3">
                    <input type="password" placeholder="Current Password" className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none" />
                    <input type="password" placeholder="New Password" className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:outline-none" />
                    <button className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all mt-2">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-slate-100 flex justify-end">
            <button className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all shadow-xl active:scale-95">
              Save All Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
