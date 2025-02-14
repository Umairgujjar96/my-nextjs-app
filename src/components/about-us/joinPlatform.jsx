import React from "react";
import ContactUsBtn from "./ContactUsBtn";

const JoinPlatform = () => {
  return (
    <div className="relative flex flex-col justify-center items-center py-24">
      {/* Darker Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col z-10 items-center gap-4">
        <h3 className="text-3xl font-bold text-white">Join Our Platform Today!</h3>
        
        <ContactUsBtn />

      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/aboutUs/flowers.png')] bg-cover bg-center"
        style={{ filter: "brightness(0.6)" }} // Adjusts darkness
      ></div>
    </div>
  );
};

export default JoinPlatform;
