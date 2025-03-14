
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0z" fill="#F26F1B"/>
                <path d="M24 13.5c-1.2-3.6-4.8-6-8.4-6-5.4 0-9.6 4.2-9.6 9.6 0 3.6 2.4 7.2 6 8.4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
                <circle cx="24" cy="18" r="3" fill="white"/>
                <circle cx="18" cy="24" r="3" fill="white"/>
              </svg>
              <span className="ml-2 text-xl font-semibold">Pelipels</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:text-brand-orange transition-colors">Home</Link>
              <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:text-brand-orange transition-colors">Services</Link>
              <Link to="/pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:text-brand-orange transition-colors">Pricing</Link>
              <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:text-brand-orange transition-colors">Blog</Link>
              <Link to="/contact" className="btn-primary ml-4">Contact Us</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-orange focus:outline-none"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-orange">Home</Link>
          <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-orange">Services</Link>
          <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-orange">Pricing</Link>
          <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:text-brand-orange">Blog</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium btn-primary text-center mt-4 mx-3">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
