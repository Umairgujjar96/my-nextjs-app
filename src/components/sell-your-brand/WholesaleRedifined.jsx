import React from "react";
import { TbCirclesRelation } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

const WholesaleRedifined = () => {
  const Data = [
    {
      icons: <TbCirclesRelation />,
      title: "End-to-End Support",
      detail:
        "Assistance in—listing products, account overview and logistics. Letting you, as a seller focus on your product sales and pricing.",
    },
    {
      icons: <IoBagHandle />,
      title: "Trading & Expansion",
      detail:
        "Thokmandee empowers you to showcase your products and allow buyers to source from you all across Europe.",
    },
    {
      icons: <MdPlaylistAddCheckCircle />,
      title: "Transparent Payment Terms",
      detail:
        "We Guarantee Secure, Instant Payment*. You get paid instantly by us and we cover up to 30-60 day payment terms for your customers.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="text-center mx-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#007641] mb-4">
          Wholesale Redefined with Ultimate Ease
        </h2>
        <p className="text-lg text-gray-600">
          Reach a wide network of retailers and consumers across different
          European regions
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

export default WholesaleRedifined;
