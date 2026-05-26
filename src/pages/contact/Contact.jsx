import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const faqs = [
    { q: "How do I list my property?", a: "To list your property, click on the 'Post Property' button in the navigation bar. You'll need to create an account and provide details such as location, price, and high-quality photos." },
    { q: "Are there any hidden fees?", a: "No, we believe in transparency. All listing fees and commission structures are clearly outlined in our service agreement." },
    { q: "How can I schedule a viewing?", a: "You can schedule a viewing by contacting the agent directly through the property details page or by using the 'Request Information' form." },
    { q: "Do you offer property management?", a: "Yes, we offer comprehensive property management services for investors and homeowners. Contact our concierge team for more details." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold text-slate-900">Get in Touch</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Have questions about a property or want to work with us? We're here to help.</p>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info & Socials */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Office Address', text: '123 Luxury Ave, Beverly Hills, CA 90210' },
                  { icon: Phone, title: 'Phone Number', text: '+1 (555) 000-0000' },
                  { icon: Mail, title: 'Email Address', text: 'hello@estateflow.com' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary shrink-0">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-slate-900">Follow Us</h3>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-secondary transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6 pt-12 border-t border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-100 rounded-2xl p-6 hover:border-secondary/30 transition-all group">
                    <button className="w-full flex items-center justify-between text-left">
                      <span className="font-bold text-slate-900">{faq.q}</span>
                      <ChevronDown size={20} className="text-slate-400 group-hover:text-secondary transition-colors" />
                    </button>
                    {/* Simplified for now, in a real app this would toggle */}
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10" />
            
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Property Listing</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Your Message</label>
                <textarea rows="5" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl active:scale-95 group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
