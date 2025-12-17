'use client';

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-neutral-800 leading-relaxed mb-6">
              Luxe Car Wash & Lounge offers a premium experience where your car gets the care it deserves while you relax in a cozy, modern lounge.
            </p>
            <p className="text-lg text-neutral-800 leading-relaxed">
              We've reimagined the car wash experience by combining exceptional automotive care with a sophisticated relaxation space. Every detail is designed with your comfort and your vehicle's pristine condition in mind.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-12 h-64 flex items-center justify-center shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-3xl">L</span>
              </div>
              <p className="text-gray-300 text-sm tracking-wider">LUXE EXPERIENCE</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-amber-200 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-medium text-black mb-4">Mission</h3>
            <p className="text-neutral-700 leading-relaxed">
              To deliver top-tier car care and an elevated lounge experience for every customer.
            </p>
          </div>
          <div className="bg-white border border-blue-200 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-medium text-black mb-4">Vision</h3>
            <p className="text-neutral-700 leading-relaxed">
              To be South Africa's most luxurious car wash and lounge destination.
            </p>
          </div>
          <div className="bg-white border border-gray-300 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-medium text-black mb-4">Values</h3>
            <p className="text-neutral-700 leading-relaxed">
              Luxurious, attentive, calm, professional, and customer-first in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}