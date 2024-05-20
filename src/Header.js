// Header.js

import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <header className="bg-gray-200 p-6 header">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          {/* Logo */}
          <img src="/images/pahal.jpg" alt="Logo" className="h-8 w-8 mr-2" />

          {/* Email Address and Email Logo */}
          <div className="flex items-center mr-4">
            <img src="/images/email.png" alt="Email Logo" className="logo w-8 h-8" />
            <span className="text-2xl font-lightblack ml-2">abc@iiitn.ac.in</span>
          </div>

          {/* Phone Number and Phone Logo */}
          <div className="flex items-center mr-4">
            <img src="/images/phone-call.png" alt="Phone Logo" className="logo w-8 h-8 mobile-call" />
            <span className="text-2xl font-lightblack ml-2">+11111111111</span>
          </div>
        </div>

        {/* Donate Now Button */}
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity md:w-auto">
          DONATE NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
