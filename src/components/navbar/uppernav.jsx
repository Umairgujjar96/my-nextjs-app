"use client";
import React, { useState } from "react";

const Uppernav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const language = [
    { name: "English" },
    { name: "Español" },
    { name: "Français" },
    { name: "Deutsch" },
    { name: "Italiano" },
    { name: "Português" },
    { name: "العربية" },
    { name: "हिन्दी" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#FFEBB6] flex flex-col md:flex-row items-center justify-between py-2 px-4 md:px-16">
      {/* Central Text */}
      <h5 className="md:ml-auto text-center md:text-left">
        Offering “Buy Now, Pay Later” Option for Our Esteemed Customers!{" "}
        <strong className="hover:cursor-pointer underline hover:no-underline">
          Apply Now
        </strong>
      </h5>

      {/* Dropdown Button */}
      <div className="relative mt-2 md:mt-0 md:ml-auto">
        <button
          onClick={toggleDropdown}
          className="w-full md:w-44 px-4 md:px-4 py-1 text-base text-black bg-white border-2 border-black focus:outline-none flex items-center justify-center space-x-2"
        >
          <span>Select Language</span>
          <span
            className={`${!isOpen ? "rotate-180" : ""} inline-block transform`}
          >
            ^
          </span>
        </button>

        {/* Dropdown Items */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto max-h-60">
            <ul className="text-gray-700">
              {language.map((x, i) => (
                <li
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {x.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uppernav;
