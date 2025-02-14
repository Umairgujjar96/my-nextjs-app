import React from "react";

const OurMission = () => {
  const Data = [
    {
      title: "Our Mission",
      img: "/aboutUs/Capture.PNG",
      description:
        "Facilitate the network of buyers and sellers, making wholesale transactions accessible and efficient – encouraging the development of local retailers and enabling brands to expand their customer base in Europe.",
    },
    {
      title: "Our Vision",
      img: "/aboutUs/Capture.PNG",
      description:
        "Empowering wholesale trade with innovative simplicity, the ease of business is redefined, blending traditional values with modern efficiency for a transformative experience.",
    },
  ];

  return (
    <div className="bg-[#FFFBED] flex flex-col md:flex-row gap-10 p-10 md:px-24 items-center">
      {Data.map((x, i) => (
        <div key={i} className="flex flex-col items-center text-center md:mx-7">
          <h3 className="text-3xl font-bold text-[#00422F]">{x.title}</h3>
          <img
            src={x.img}
            alt={x.title}
            className="w-full max-w-[300px] h-auto object-cover rounded-lg mb-3"
          />
          <p className="text-base text-gray-700 leading-relaxed">
            {x.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OurMission;
