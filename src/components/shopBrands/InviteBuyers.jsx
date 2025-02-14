import React from "react";
import RegisterToBuyBtn from "../navbar/registerToBuyBtn";

const InviteBuyers = () => {
  return (
    <div className="bg-[#FFF4E1] flex flex-col lg:flex-row py-16 md:gap-36 md:px-10">
      <div className="lg:basis-[50%] mb-8 lg:mb-0 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-[#00422F] text-center mx-16 lg:text-left leading-tight">
          Thokmandee Invites Buyers to Revamp Their Collection with{" "}
          <span className="text-[#49917d]">Premium </span>
          Products
        </h2>
      </div>
      <div className="lg:basis-[50%] flex flex-col justify-center gap-5 mx-10 text-center lg:text-left">
        <p className="text-[#00422F] text-base mb-6">
          Connect with top suppliers offering everything from artisanal crafts
          to innovative tech. With Thokmandee, buying is not just a transaction,
          it’s an experience.
        </p>
        <div className="flex justify-center lg:justify-start">
          <RegisterToBuyBtn />
        </div>
      </div>
    </div>
  );
};

export default InviteBuyers;
