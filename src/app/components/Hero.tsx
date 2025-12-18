'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-blue-950 to-black">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
          Where Luxury <span className="font-normal text-gray-300">Meets Clean</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A premium car wash and lounge experience where your car gets VIP treatment while you relax in comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-gray-300 text-black hover:bg-gray-400 transition-all duration-300 text-sm tracking-wider font-medium rounded-sm shadow-lg"
          >
            VIEW CAR WASH PACKAGES
          </button>
          <button
            onClick={() => scrollToSection('lounge')}
            className="px-8 py-4 bg-transparent border-2 border-gray-300 text-white hover:bg-gray-300 hover:text-black transition-all duration-300 text-sm tracking-wider font-medium rounded-sm"
          >
            VISIT THE LOUNGE
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hover:opacity-80 transition-opacity"
      >
        <ChevronDown className="text-gray-300 animate-bounce" size={32} />
      </button>
    </section>
  );
}