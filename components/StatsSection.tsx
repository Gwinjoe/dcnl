'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { STATS_CONFIG } from '@/lib/config';


const { stats } = STATS_CONFIG;

function AnimatedCounter({
  target,
  suffix = '',
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 30; // Animate over 30 frames

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our track record speaks for itself with years of excellence and consistent delivery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-center p-8"
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-3">
                <AnimatedCounter
                  target={parseInt(stat.value)}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-blue-100 text-lg font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
