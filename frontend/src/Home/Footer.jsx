// Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GlobeAltIcon } from '@heroicons/react/outline';
import {Link} from 'react-router-dom'
export function Footer() {
  return (
    <footer className="bg-gray-700 w-full  text-white py-8 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0 px-6">
        
        {/* Language Selector */}
        <div className="flex items-center space-x-2 text-sm">
          <GlobeAltIcon className="w-5 h-5" />
          <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-200">
            English
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaLinkedin].map((Icon, index) => (
            <Icon
              key={index}
              className="w-6 h-6 text-white hover:text-gray-300 transition duration-200"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Legal Links */}
        <div className="text-center md:text-left space-x-4 text-sm">
          <Link to="/termcondition" className="hover:underline transition duration-200">Terms of Service</Link>
          <Link to="/privacy_policy" className="hover:underline transition duration-200">Privacy Policy</Link>
          <Link to="#" className="hover:underline transition duration-200">Cookie Policy</Link>
          <Link to="#" className="hover:underline transition duration-200">About Section</Link>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-8 text-xs text-gray-400">
        ©removebgg, Lambda Production
      </div>

      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-wave-pattern bg-repeat-x transform scale-x-110 opacity-50" />
    </footer>
  );
};


