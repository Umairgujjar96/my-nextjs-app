import React from "react";

const Partners = () => {
  const partners = [
    {
      img: "/contactUs/unilever-brand.svg",
      title: "Unilever",
    },
    {
      img: "/contactUs/parle-img.svg",
      title: "Parle",
    },
    {
      img: "/contactUs/dal-monte-img.svg",
      title: "DalMonte",
    },
    {
      img: "/contactUs/aashirvaad-img.svg",
      title: "Aashirwaad",
    },
    {
      img: "/contactUs/tapal-img.svg",
      title: "Tapal Danedar",
    },
    {
      img: "/contactUs/haldiram-img.svg",
      title: "Haldiram",
    },
  ];
  return (
    <div className="bg-[#E8FFED] flex flex-col justify-center py-12 px-12 gap-2 items-center">
      <div className="flex items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-[#007641]">
          Our Partner Brands
        </h2>
      </div>

      <div className="flex items-center justify-center text-center">
        <p className="text-xl text-gray-800">
          We work with most valuable brands to deliver best results
        </p>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-6 gap-8 mt-8 place-items-center">
        {partners.map((x, i) => (
          <div key={i}>
            <img
              className="h-40 w-40 border-2 border-gray-400 rounded-full"
              src={x.img}
              alt={x.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
