import React from "react";

const OpenPosition = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-10">
      <h2 className="text-3xl font-bold text-[#00743C]">Open Positions</h2>
      <p className="text-lg px-3 text-gray-600">
        Currently, we do not have any open positions available. Please check
        back later!
      </p>
    </div>
  );
};

export default OpenPosition;
