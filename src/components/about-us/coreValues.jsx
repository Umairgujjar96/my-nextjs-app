import React from "react";
import { IoIosPeople } from "react-icons/io";
import { PiRankingFill } from "react-icons/pi";
import { TbCirclesRelation, TbBasketCheck } from "react-icons/tb";

const CoreValues = () => {
  const Data = [
    {
      icon: <IoIosPeople size={40} className="text-[#00743C]" />,
      title: "Community",
    },
    {
      icon: <PiRankingFill size={40} className="text-[#00743C]" />,
      title: "Credibility",
    },
    {
      icon: <TbCirclesRelation size={40} className="text-[#00743C]" />,
      title: "Collaboration",
    },
    {
      icon: <TbBasketCheck size={40} className="text-[#00743C]" />,
      title: "Continuous Improvement",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center md:flex-row  justify-center py-6">
      {Data.map((x, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-3 my-3 xs:mx-5 md:mx-10 items-center text-center"
        >
          {x.icon}
          <h3 className="text-base font-semibold text-[#00422F]">{x.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CoreValues;
