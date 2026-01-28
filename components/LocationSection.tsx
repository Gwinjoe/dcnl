'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { CONTACT_INFO } from '@/lib/config';

export default function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Located in the heart of Lagos, we're ready to discuss your next project.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="p-6 border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Address</h3>
                  <p className="text-zinc-600">{CONTACT_INFO.address}</p>
                  <p className="text-zinc-600 text-sm mt-1">{CONTACT_INFO.fullAddress || 'Nigeria'}</p>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="p-6 border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-zinc-600 text-sm mt-1">Mon - Fri, 9 AM - 6 PM</p>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-zinc-600 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-6 border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">Business Hours</h3>
                  <p className="text-zinc-600">
                    <span className="font-semibold">Monday - Friday</span>
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                  <p className="text-zinc-600 text-sm mt-2">
                    <span className="font-semibold">Saturday</span>
                    <br />
                    10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-lg overflow-hidden shadow-lg h-96 bg-gradient-to-br from-blue-50 to-zinc-50">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4 opacity-20" />
                <p className="text-zinc-400 text-lg font-semibold">Interactive Map</p>
                <p className="text-zinc-400 text-sm mt-2">
                  You can embed a Google Maps iframe here
                </p>
                {/* Uncomment and replace with actual Google Maps embed code */}
                {/* <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=..."
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
