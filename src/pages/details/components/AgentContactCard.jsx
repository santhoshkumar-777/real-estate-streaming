import React from 'react';
import { Phone, Mail, MessageSquare, Star } from 'lucide-react';

const AgentContactCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6">
      <div className="flex items-center gap-4">
        <img src={agent.image} className="w-16 h-16 rounded-full object-cover border-4 border-slate-50" alt="" />
        <div>
          <h4 className="text-xl font-bold text-slate-900">{agent.name}</h4>
          <div className="flex items-center gap-1 text-accent">
            <Star size={14} className="fill-accent" />
            <span className="text-sm font-bold">4.9 / 5.0 Rating</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <button className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Phone size={18} />
          Call Agent
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-900 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
          <Mail size={18} />
          Email Agent
        </button>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <h5 className="font-bold text-slate-900 mb-4">Request Information</h5>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm focus:outline-none" />
          <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm focus:outline-none" />
          <textarea placeholder="Message" rows="4" className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 text-sm focus:outline-none resize-none"></textarea>
          <button className="w-full bg-secondary text-white py-4 rounded-2xl font-bold hover:bg-secondary/90 transition-all">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgentContactCard;
