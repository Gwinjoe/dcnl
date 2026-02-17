'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/config';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Container */}
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Project?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team of experts and discover how DCNL can bring your vision to life with precision,
            reliability, and excellence.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}`, '_blank')}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-10 py-6 text-lg group"
            >
              Contact us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white/10 font-semibold px-10 py-6 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/20">
            {/* Phone */}
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-sm">Call Us</p>
                <p className="text-white font-semibold">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-sm">Email Us</p>
                <p className="text-white font-semibold">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
