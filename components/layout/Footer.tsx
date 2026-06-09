"tsx"
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaXTwitter as Twitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <Heart className="w-5 h-5 text-emerald-500 fill-emerald-500" />
            <span className="font-bold tracking-tight">Friends of the Little Angel</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Since 2011, providing reliable structural community safety nets, quality developmental care, and modern livelihood independence blueprints.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2 bg-gray-800 hover:bg-emerald-700 rounded-lg text-gray-400 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-emerald-700 rounded-lg text-gray-400 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-emerald-700 rounded-lg text-gray-400 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Home Base</a></li>
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">Our History</a></li>
            <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Core Programs</a></li>
            <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Media Gallery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Core Focus Areas</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>• Orphans & Vulnerable Support</li>
            <li>• Women Entrepreneurship Training</li>
            <li>• Youth Technical Apprenticeships</li>
            <li>• Resilient Village Boreholes</li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contact Info</h3>
          <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Mombasa, Kenya</span></div>
          <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-emerald-500 shrink-0" /><span>+254 700 000000</span></div>
          <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-emerald-500 shrink-0" /><span>info@friendsofthelittleangel.org</span></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2026 Friends of the Little Angel. Registered Community Based Organization (CBO), Kenya. All Rights Reserved.
      </div>
    </footer>
  );
}