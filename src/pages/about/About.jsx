import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { agents } from '../../data/mockData';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold uppercase tracking-[0.3em] text-sm"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Redefining Luxury <br /> <span className="text-secondary italic">Real Estate</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            EstateFlow was founded on a simple principle: to make the process of finding a luxury home as exquisite as the homes themselves.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">Empowering Your Home Journey</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We don't just sell properties; we facilitate life-changing decisions. Our platform combines cutting-edge technology with world-class expertise to deliver a seamless real estate experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: 'Trusted Expertise', text: 'Over 15 years of industry leadership and thousands of successful closings.' },
                { icon: Target, title: 'Personalized Service', text: 'Tailored recommendations based on your unique lifestyle and investment goals.' }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">$2.5B+</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Total Sales Volume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Meet Our Expert Agents</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our team of world-class agents is here to guide you every step of the way.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, i) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img src={agent.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">{agent.name}</h4>
                <p className="text-sm text-secondary font-medium mb-4">{agent.role}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-900">{agent.listings}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Listings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-900">{agent.experience}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Exp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-900">{agent.rating}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Rating</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
