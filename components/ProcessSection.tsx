'use client';

import { CheckCircle2 } from 'lucide-react';
import { PROCESS_CONFIG } from '@/lib/config';


const { steps: processSteps } = PROCESS_CONFIG;

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A structured approach to delivering exceptional results, from initial consultation to final delivery and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (visible on lg screens) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                }`}
              >
                {/* Step Container */}
                <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 h-full">
                  {/* Step Number and Icon */}
                  <div className="flex items-center gap-4 mb-4 lg:justify-end lg:flex-row-reverse">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Dot (lg screens) */}
                <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
