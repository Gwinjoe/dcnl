'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HERO_CONFIG, CONTACT_INFO } from '@/lib/config';

// Use configuration from centralized config file
const heroSlides = HERO_CONFIG.slides;
const rotatingFeatures = HERO_CONFIG.features;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);

  // Rotate features
  useEffect(() => {
    const featureTimer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % rotatingFeatures.length);
    }, 3000);
    return () => clearInterval(featureTimer);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newNext = (currentSlide + 2) % heroSlides.length;
    setNextSlide(newNext);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newNext = (currentSlide - 2 + heroSlides.length) % heroSlides.length;
    setNextSlide(newNext);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-900">
      {/* Background Image with Fade */}
      <div className="absolute inset-0">
        <Image
          src={currentHero.image}
          alt="Hero"
          fill
          className={`object-cover transition-opacity duration-500 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}
          priority
          unoptimized
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        {/* Main Text - Center */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 transition-all duration-500 ${
              isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {currentHero.title}
          </h1>
          <p
            className={`text-lg sm:text-xl lg:text-2xl text-blue-300 transition-all duration-500 ${
              isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {currentHero.subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-20 transition-all duration-500 ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg"
            onClick={() => window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}`, '_blank')}
          >
            Contact us
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white bg-transparent hover:bg-white hover:text-zinc-900 font-semibold px-8 py-6 text-lg"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Bottom - Rotating Features (center on mobile, keep left on md+) */}
        <div className="absolute z-20 bottom-28 left-1/2 transform max-md:-translate-x-1/2 md:left-8 md:transform-none md:bottom-12">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 max-w-xs border border-blue-500/30">
          <p
            className={`text-white text-sm sm:text-base font-medium transition-all duration-500 ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}
          >
            ✓ {rotatingFeatures[featureIndex]}
          </p>
        </div>
      </div>

      {/* Navigation Controls (center on mobile, keep right on md+) */}
        <div className="absolute z-20 bottom-14 left-1/2 transform -translate-x-1/2 flex gap-4 md:left-auto md:right-8 md:transform-none md:bottom-8">
        <button
          onClick={handlePrevSlide}
          disabled={isTransitioning}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-50 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={isTransitioning}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-200 disabled:opacity-50 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators (centered, pinned very bottom on mobile) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex gap-2 bottom-4 md:bottom-8">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                const diff = index - currentSlide;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) handleNextSlide();
                } else {
                  for (let i = 0; i < Math.abs(diff); i++) handlePrevSlide();
                }
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 w-8'
                : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
