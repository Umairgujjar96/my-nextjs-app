import React from "react";

const WholeSalePoints = () => {
  const Data = [
    {
      img: "/aboutUs/1.PNG",
      detail: (
        <div className="text-gray-600">
        A <span className="font-bold">marketplace</span> for sourcing <span className="font-bold">wholesale products</span>
        </div>
        )
        
    },
    {
      img: "/aboutUs/2.PNG",
      detail: (
        <div className="text-gray-600">
        Providing <span className="font-bold">resources</span> for <span className="font-bold">sales and business</span>
        </div>
        )
    },
    {
      img: "/aboutUs/3.PNG",
      detail: (
        <div className="text-gray-600">
        An <span className="font-bold">evolving</span> collection of <span className="font-bold">diverse brands</span>
        </div>
        )
    },
    {
      img: "/aboutUs/4.PNG",
      detail: (
        <div className="text-gray-600">
        Offering <span className="font-bold">mutual benefits</span> to retailers and brands.
        </div>
        )
    },
  ];

  return (
    <div className="bg-[#FFFBED] flex flex-col md:flex-row xs:px-6 md:px-28 py-20">
      {/* Left Section */}
      <div className="md:basis-[60%] relative flex items-center xs:px-4 md:px-0 xs:py-6 md:py-0 md:pr-32">
        <h2 className="xs:text-xl md:text-3xl font-semibold text-start justify-center">
          At its core, <span className="text-[#00743C]">Thokmandee is dedicated to easing 
          the business processes</span> between brands and retailers and fostering a 
          <span className="text-[#00743C]">competitive yet unified approach</span> to their shared goals.
        </h2>
        <img className="absolute xs:-top-10 xs:-left-2 md:-left-16 md:top-10" src="/aboutUs/comma1.png"></img>
        <img className="absolute  xs:-bottom-8 xs:right-4 md:right-24 md:top-40" src="/aboutUs/comma2.png"></img>
        
      </div>

      {/* Right Section */}
      <div className="md:basis-[40%] flex flex-col gap-4">
        {Data.map((item, index) => (
          <div key={index} className="flex gap-3 items-center bg-[#FFFBED] rounded-lg shadow-sm">
            <img className="h-12 w-16" src={item.img} alt={item.detail} />
            <h3 className="xs:text-base md:text-xl bg-[#FFFBED] w-80 pt-2 font-medium">{item.detail}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WholeSalePoints;
