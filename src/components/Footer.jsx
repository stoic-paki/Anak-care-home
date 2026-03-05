// src/components/Footer.jsx
import React from 'react';
import "./../sections/FullScreenHome.css";
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Use current date (you can format it however you like)
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <footer className="bg-gray-900 text-gray-300 footer-align">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-10 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
          {/* Brand / About */} 
          <div className="md:col-span-2 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-white mb-4">
              CareHome
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Providing compassionate, personalized care in a warm and supportive environment. 
              Your loved ones deserve the best.
            </p>
            <p className="text-sm text-gray-500">
              As of {currentDate}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" end className="hover:text-lime-400 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover:text-lime-400 transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-lime-400 transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-lime-400 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <address className="not-italic space-y-3">
              <p>
                Alexandria, Virginia<br />
                United States
              </p>
              <p>
                Email: anakhomecare@gmail.com<br />
                Phone: (831) 402-2069
              </p>
            </address>

            {/* Social icons (you can replace with real links/icons) */}
            <div className="flex gap-5 links-wrapper">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagramSquare />
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                <span className="sr-only">Twitter/X</span>
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Anak CareHome. All rights reserved.
          </p>
          <p className="mt-2">
            Designed By Stoic Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;