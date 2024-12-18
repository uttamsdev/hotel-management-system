import React from 'react';
import { FaWifi, FaWater, FaPhoneVolume } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";

const Facilities = () => {
  return (
    <div className="w-full py-16 mt-[-170px] relative z-[99]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
            Discover Our Facilities
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the best in comfort and convenience with top-notch facilities tailored to your needs.
          </p>
        </div>

        {/* Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Wifi */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white flex items-center justify-center rounded-full">
              <FaWifi className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wifi</h3>
            <p className="text-sm text-gray-600">Stay connected with high-speed internet available throughout the hotel.</p>
          </div>

          {/* Hot Water */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white flex items-center justify-center rounded-full">
              <FaWater className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hot Water</h3>
            <p className="text-sm text-gray-600">Enjoy warm showers with our 24/7 hot water service.</p>
          </div>

          {/* Air Conditioning */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white flex items-center justify-center rounded-full">
              <TbAirConditioning className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Air Conditioning</h3>
            <p className="text-sm text-gray-600">Relax in perfectly climate-controlled rooms.</p>
          </div>

          {/* Intercom */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white flex items-center justify-center rounded-full">
              <FaPhoneVolume className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Intercom</h3>
            <p className="text-sm text-gray-600">Quick and easy communication with our intercom system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
