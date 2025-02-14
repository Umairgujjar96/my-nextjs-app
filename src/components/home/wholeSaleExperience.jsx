import React from "react";

const steps = [
  {
    id: 1,
    title: "Profile Setup",
    description:
      "Simply, register as a vendor, enter your details – Specifying your industry, business size, and wholesale details.",
    bgColor: "bg-[#F8E1E9]",
    icon: "/home/Group-1.svg",
    image: "/home/profile-setup-img.png",
  },
  {
    id: 2,
    title: "Product Listing",
    description:
      "Upload product pictures, enter descriptions and specifications and done.",
    bgColor: "bg-[#FFE1C7]",
    icon: "/home/Group-2.svg",
    image: "/home/profile-setup-img.png",
  },
  {
    id: 3,
    title: "Order Management",
    description:
      "Manage, and oversee your orders, shipping updates and transactions with buyers.",
    bgColor: "bg-[#D3FFEE]",
    icon: "/home/Group-3.svg",
    image: "/home/profile-setup-img.png",
  },
];

const WholeSaleExperience = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Header Section */}
      <div className="text-center mb-10 px-4 sm:px-8 md:px-16">
  <h1 className="xs:text-2xl md:text-3xl font-bold mx-[12%] md:mx-[14%]">
    Ideal Wholesale Experience in 3 Simple Steps
  </h1>
  <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-600 max-w-2xl mx-auto">
    Leverage from the expertise of the best
  </p>
</div>


      {/* Steps Section */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-10 mx-12 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col gap-5">
            <div className={`${step.bgColor} rounded-2xl h-80 flex flex-col`}>
              <img className="h-16 w-12 mt-2 ml-4" src={step.icon} alt={step.title} />
              <img className="w-60 md:w-72 mx-auto" src={step.image} alt={step.title} />
            </div>
            <h3 className="text-2xl ml-3 text-[#00743C]  font-bold">{step.title}</h3>
            <p className="text-gray-600 ml-3 text-pretty text-sm md:text-base mx-auto">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WholeSaleExperience;
