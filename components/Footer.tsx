'use client';

import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">
                DCNL
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Destinyt Company Nigerian Limited - Excellence in construction, fabrication, and industrial solutions since 2009.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Process', href: '#process' },
                  { name: 'Contact', href: '#contact' },
                ].map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {name}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'Steel Fabrication',
                  'Structural Construction',
                  'Industrial Installation',
                  'Offshore Solutions',
                  'Maintenance',
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {service}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white text-sm font-semibold">Address</p>
                    <p className="text-zinc-400 text-sm">Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white text-sm font-semibold">Phone</p>
                    <p className="text-zinc-400 text-sm">+234 (0) XXX XXX XXXX</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white text-sm font-semibold">Email</p>
                    <p className="text-zinc-400 text-sm">info@dcnl.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-700" />

          {/* Bottom Footer */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              &copy; {currentYear} Destinyt Company Nigerian Limited (DCNL). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
