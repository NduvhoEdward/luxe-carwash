'use client';

import React from 'react';

const foodMenu = [
  { name: 'Mogodu', price: 'R55' },
  { name: 'Pap & Vleis', price: 'R65' },
  { name: 'Kota (Classic)', price: 'R40' },
  { name: 'Kota (Deluxe)', price: 'R60' },
  { name: 'Chicken Wings (6pc)', price: 'R45' }
];

const drinksMenu = [
  { name: 'Coffee (Cappuccino/Latte)', price: 'R28' },
  { name: 'Smoothies', price: 'R35' },
  { name: 'Fresh Pastries', price: 'R25' },
  { name: 'Muffins', price: 'R22' },
  { name: 'Soft Drinks', price: 'R18' }
];

export default function Lounge() {
  return (
    <section id="lounge" className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">The Lounge</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-neutral-800 text-lg">Relax, sip a latte, and let us do the rest.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-amber-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-medium text-black mb-6">Food Menu</h3>
            <ul className="space-y-4">
              {foodMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-amber-200 pb-3">
                  <span className="text-neutral-700">{item.name}</span>
                  <span className="text-black font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-blue-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-medium text-black mb-6">Drinks & Pastries</h3>
            <ul className="space-y-4">
              {drinksMenu.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-blue-200 pb-3">
                  <span className="text-neutral-700">{item.name}</span>
                  <span className="text-black font-medium">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-black text-white hover:bg-blue-950 transition-all duration-300 text-sm tracking-wider rounded-sm shadow-lg">
            DOWNLOAD FULL MENU
          </button>
        </div>
      </div>
    </section>
  );
}