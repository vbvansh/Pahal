import React from 'react';
import './AboutPahal.css'
const AboutPahal = () => {
  return (
    <div className="flex justify-between p-8">
   
      <div className="w-1/2 pr-4">
        <h2 className="text-3xl font-bold mb-4 mt-10">About PAHAL</h2>
        <p className="text-gray-700 font-serif text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity mb-4 mt-8">READ MORE...</button>
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-gray shadow-2xl rounded-md flex-grow bg-white shadow-2xl rounded-3xl border border-yellow-500">
        {/* You can replace the image source and alt text with your own */}
        <img
          src="/images/aboutpahal3.jpg"
          alt="PAHAL Image"
          className="w-full h-80 object-cover rounded-md mt-10"
        />
      </div>
    </div>
  );
};

export default AboutPahal;
