import React from "react";

const MarketNumbers = () => {
  return (
    <div
      className="flex flex-col md:flex-row bg-[url('/sellYourBrand/map.png')] bg-cover bg-center py-12 px-5 md:px-10 items-center"
      style={{
        backgroundSize: "130%", // Zoom in the background
        backgroundPosition: "center", // Focus the center of the image
      }}
    >
      {/* Left Section */}
      <div className="basis-full md:basis-1/2 text-center md:text-left mb-8 md:mb-0">
        <h3 className="text-3xl md:text-4xl font-bold text-[#007641] mb-4">
          Expand Your Market Presence in
        </h3>
        <h3 className="text-3xl md:text-4xl font-bold text-[#007641] mb-4">
          Europe with Thokmandee
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Customize Your Retail Connections Across 27 Countries!
        </p>
      </div>

      {/* Right Section */}
      <div className="basis-full md:basis-1/2 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <h5 className="text-3xl font-semibold text-[#007641] mb-3">20K+</h5>
          <p className="text-lg text-gray-700">Independent brands on Thokmandee.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
          <h5 className="text-3xl font-semibold text-[#007641] mb-3">+30%</h5>
          <p className="text-lg text-gray-700">Increase in sales in less than 3 months.</p>
        </div>
      </div>
    </div>
  );
};

export default MarketNumbers;
