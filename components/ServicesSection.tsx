'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES_CONFIG } from '@/lib/config';
import {
  Wrench,
  Building2,
  Zap,
  Anchor,
  Shield,
  Cog,
  type LucideIcon,
} from 'lucide-react';

// Map icon names from config to actual Lucide components
const iconMap: { [key: string]: LucideIcon } = {
  Wrench,
  Building2,
  Zap,
  Anchor,
  Shield,
  Cog,
};

// Use services from the centralized config file
const services = SERVICES_CONFIG.services.map(service => ({
  ...service,
  icon: iconMap[service.icon],
}));

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet the unique needs of construction and fabrication projects across Nigeria and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-zinc-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
