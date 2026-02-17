'use client';

import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { COMPANY_INFO, SOCIAL_LINKS, FOOTER_CONFIG, CONTACT_INFO } from '@/lib/config';

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
                {COMPANY_INFO.shortName}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target='_blank'
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target='_blank'
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target='_blank'
                  className="bg-zinc-800 hover:bg-blue-600 rounded-full p-3 transition-colors text-zinc-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target='_blank'
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
                {FOOTER_CONFIG.quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(`#${link.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {link}
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
                {FOOTER_CONFIG.services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector("#services");
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
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
                    <p className="text-zinc-400 text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <Phone className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white text-sm font-semibold">Phone</p>
                    <p className="text-zinc-400 text-sm">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-white text-sm font-semibold">Email</p>
                    <p className="text-zinc-400 text-sm">{CONTACT_INFO.email}</p>
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
              &copy; {currentYear} {COMPANY_INFO.name} ({COMPANY_INFO.shortName}). All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href={FOOTER_CONFIG.policyLinks.privacy} className="text-zinc-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href={FOOTER_CONFIG.policyLinks.terms} className="text-zinc-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href={FOOTER_CONFIG.policyLinks.cookies} className="text-zinc-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
