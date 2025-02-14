import React from "react";
import { TbCirclesRelation } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

const ShopWholesale = () => {
  const Data = [
    {
      icons: <TbCirclesRelation />,
      title: "Extensive Product Catalogue",
      detail: "Pick from millions of items from the best brands in Europe.",
    },
    {
      icons: <IoBagHandle />,
      title: "Competitive Pricing",
      detail:
        "Competitive wholesale pricing lets you maximize profitability and business.",
    },
    {
      icons: <MdPlaylistAddCheckCircle />,
      title: "Quality Assured",
      detail:
        "Verified suppliers to ensure our platform's products are high-quality.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mx-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#007641] mb-4">
          Shop Wholesale with Ease
        </h2>
        <p className="text-lg text-gray-600">
          Your Ultimate Source for Diverse and Genuine Wholesale Deals
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Section with Image */}
        <div className="basis-full md:basis-1/2">
          <img
            src="/sellYourBrand/1.png"
            alt="Wholesale Redefined"
            className="rounded-lg shadow-lg md:w-full md:h-screen"
          />
        </div>

        {/* Right Section with Data */}
        <div className="basis-full xs:mx-12 md:mx-0 my-auto md:basis-1/2 space-y-8 text-left">
          {Data.map((x, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="text-4xl text-[#007641] mb-4">{x.icons}</div>
              <h3 className="text-xl font-semibold text-[#007641] mb-2">
                {x.title}
              </h3>
              <p className="text-base text-gray-600">{x.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopWholesale;
