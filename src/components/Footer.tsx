
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0z" fill="#F26F1B"/>
                <path d="M24 13.5c-1.2-3.6-4.8-6-8.4-6-5.4 0-9.6 4.2-9.6 9.6 0 3.6 2.4 7.2 6 8.4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
                <circle cx="24" cy="18" r="3" fill="white"/>
                <circle cx="18" cy="24" r="3" fill="white"/>
              </svg>
              <span className="ml-2 text-xl font-semibold">Pelipels</span>
            </div>
            <p className="text-gray-600 mb-6">
              We turn your ideas into captivating digital experiences that connect with your audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Branding</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Website Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Graphics Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Sales Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-orange transition-colors">Event Organizing</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-brand-orange mr-2 mt-1" />
                <span className="text-gray-600">Addis Ababa, Ethiopia<br />Bole Road, Sunshine Building</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-brand-orange mr-2" />
                <span className="text-gray-600">+251 91 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-brand-orange mr-2" />
                <span className="text-gray-600">info@pelipels.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pelipels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
