'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black font-bold text-lg">L</span>
          </div>
          <span className="text-white font-light text-lg tracking-wider">LUXE</span>
        </div>
        <p className="text-gray-500 text-sm mb-2">Where Luxury Meets Clean</p>
        <p className="text-gray-600 text-xs">© 2025 Luxe Car Wash & Lounge. All rights reserved.</p>
      </div>
    </footer>
  );
}