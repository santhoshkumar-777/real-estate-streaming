import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Heart, User, PlusCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/listing?type=buy' },
    { name: 'Rent', path: '/listing?type=rent' },
    { name: 'Agents', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
            <Home size={24} />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight",
            isScrolled ? "text-slate-900" : "text-slate-900" 
          )}>
            Estate<span className="text-secondary">Flow</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                location.pathname === link.path ? "text-secondary font-bold" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/dashboard/saved" className="p-2 text-slate-600 hover:text-secondary transition-colors">
            <Heart size={20} />
          </Link>
          <Link to="/dashboard/profile" className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-white border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
            <User size={18} />
            Login
          </Link>
          <Link 
            to="/dashboard/upload" 
            className="flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg active:scale-95"
          >
            <PlusCircle size={18} />
            Post Property
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-3">
                <Link to="/dashboard/profile" className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 rounded-xl font-medium text-slate-900">
                  <User size={18} /> Login
                </Link>
                <Link to="/dashboard/upload" className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl font-medium">
                  <PlusCircle size={18} /> Post Property
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
