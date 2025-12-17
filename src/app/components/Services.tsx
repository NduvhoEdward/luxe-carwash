'use client';

import React from 'react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'BASIC WASH',
    price: 'R70',
    icon: '🚗',
    features: ['Exterior hand wash', 'Rinse & dry', 'Tyre shine']
  },
  {
    name: 'STANDARD WASH',
    price: 'R120',
    icon: '🚙',
    features: ['Exterior wash', 'Interior vacuum', 'Dashboard wipe-down']
  },
  {
    name: 'DELUXE WASH',
    price: 'R150',
    icon: '🚘',
    features: ['Exterior + interior', 'Windows cleaned', 'Tyre & rim cleaning']
  },
  {
    name: 'FULL DETAIL',
    price: 'R450',
    icon: '✨',
    popular: true,
    features: ['Full interior deep clean', 'Seats shampoo', 'Engine wipe', 'Dashboard treatment', 'Exterior detailing']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-950 via-black to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">Car Wash Packages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Choose the perfect treatment for your vehicle</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 relative ${
                pkg.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs tracking-wider shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="text-4xl mb-4">{pkg.icon}</div>
              <h3 className="text-xl font-medium text-black mb-2 tracking-wide">{pkg.name}</h3>
              <div className="text-3xl font-light text-black mb-6">{pkg.price}</div>
              <ul className="space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-neutral-800 text-sm">
                    <Check size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm italic">Your car deserves VIP treatment.</p>
        </div>
      </div>
    </section>
  );
}