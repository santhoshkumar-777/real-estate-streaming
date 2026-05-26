import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white">
              <Home size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Estate<span className="text-secondary">Flow</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            The world's leading premium real estate platform. We help you find your dream home with ease and confidence.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Properties', 'Agents', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-secondary transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-secondary" />
              <span>123 Luxury Ave, Beverly Hills, CA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary" />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary" />
              <span>hello@estateflow.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm mb-6">Subscribe to get the latest property alerts and market updates.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-4 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 EstateFlow. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
