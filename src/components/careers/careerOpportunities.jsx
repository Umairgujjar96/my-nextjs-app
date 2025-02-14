import React from "react";

const CareerOpportunities = () => {
  return (
    <div className="flex xs:flex-col md:flex-row mt-12">
      <div className="basis-[50%] xs:px-10 md:px-32 flex xs:items-center md:items-start xs:text-center md:text-start xs:my-10 md:my-auto flex-col gap-4">
        <h4 className="text-xl text-gray-700 pb-3 font-semibold">Careers</h4>
        <div>
          <h1 className="xs:text-2xl md:text-4xl text-[#00422F] font-bold font-serif">
            Embrace New
          </h1>
          <h1 className="xs:text-2xl md:text-4xl font-bold font-serif text-[#00743C]">
            Opportunities
          </h1>
        </div>
        <p className="font-bold text-gray-600">
          We’re looking for new stars to join our growing team at Thokmandee, an
          online multivendor wholesale marketplace.
        </p>
        <p className="text-gray-600">
          We are from the people with a purpose to thrive in our value-driven
          culture and make a real and lasting difference to the organization.
        </p>
        <div className="flex justify-start">
          <button className="px-6 rounded-3xl py-2 text-base text-[#00743C] font-bold bg-[#FFCF2A] border-2 border-[#FFCF2A] hover:bg-white hover:-translate-y-2 duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <div className="basis-[50%]">
        <img
          className="md:w-full md:h-screen object-cover 
             xs:rounded-tl-3xl xs:rounded-tr-3xl xs:rounded-bl-none xs:rounded-br-none 
             md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none md:rounded-br-none"
          src="/careers/opportunities.png"
        />
      </div>
    </div>
  );
};

export default CareerOpportunities;
