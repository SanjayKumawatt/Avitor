import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Rocket } from 'lucide-react';

import logo from "../assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Top Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center mb-4 text-white">
              <img src={logo} className="h-13" alt="" />
              <span className="text-xl font-bold text-gray-300">
                AVITOR <span className="text-green-600">PVT LTD</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Building intelligent software products that simplify how businesses process information and make decisions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/tech" className="hover:text-green-400 transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (No Social Icons) */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>
                  H. No-90, Railway Society, Bajrang Nagar, <br />
                  Kota, Rajasthan, India, 324001.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="mailto:support@avitorpvtltd.in" className="hover:text-green-400 transition-colors">
                  support@avitorpvtltd.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Bar: Copyright & Legal Links --- */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-sm text-gray-500">
            &copy; {currentYear} AVITOR PRIVATE LIMITED. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;