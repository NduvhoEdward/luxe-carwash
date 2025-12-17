'use client';

import React from 'react';
import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black via-blue-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-6">Visit Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Welcome to Luxe! Your car and comfort are our top priority today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin size={24} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <p className="text-gray-400">123 Premium Street<br />Sandton, Johannesburg<br />South Africa</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock size={24} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-medium mb-2">Hours</h3>
            <p className="text-gray-400">Mon - Fri: 7am - 7pm<br />Sat: 8am - 6pm<br />Sun: 9am - 5pm</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Phone size={24} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <p className="text-gray-400">+27 11 123 4567<br />info@luxecarwash.co.za</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-blue-950 border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-light mb-6 text-center">Book Your Wash Today</h3>
          <p className="text-gray-400 text-center mb-8">Get instant responses and book your appointment</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://wa.me/27111234567?text=Hi%20Luxe!%20I'd%20like%20to%20book%20a%20car%20wash."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 text-sm tracking-wider font-medium rounded-sm shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            
            <a
              href="tel:+27111234567"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-300 to-gray-400 text-black hover:from-gray-400 hover:to-gray-500 transition-all duration-300 text-sm tracking-wider font-medium rounded-sm shadow-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">Available Mon-Sun during business hours</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}