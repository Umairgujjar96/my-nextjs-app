import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const Guarantee = () => {
  const properties = [
    {
      icon: <FaHandHoldingUsd className="text-4xl text-blue-600" />,
      text: "Up to 60-Day Flexible Payment",
    },
    {
      icon: <BsPatchCheck className="text-4xl text-green-600" />,
      text: "Local EU Guarantee",
    },
    {
      icon: <TbTruckDelivery className="text-4xl text-red-600" />,
      text: "Exclusive Shipping Across Europe",
    },
  ];

  return (
    <div className="flex flex-wrap gap-7 md:gap-32 justify-center">
      {properties.map((item, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center space-x-3 p-4 rounded-lg"
        >
          {item.icon}
          <h3 className="text-lg text-[#59A580] font-semibold">{item.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Guarantee;
