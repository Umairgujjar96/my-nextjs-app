import React from "react";
// import LoginForm from "../login/loginForm";
import { IoClose } from "react-icons/io5"; // Import close icon
// import RegisterToBuyBtn from "@/components/navbar/registerToBuyBtn";
import RegisterToBuyForm from "./registerToBuyForm";

const RegisterToBuyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Hide when isOpen is false

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 xs:h-screen md:h-full xs:overflow-y-scroll md:overflow-hidden flex justify-center items-center z-50"
      onClick={onClose} // Close when clicking outside
    >
        
      <div
        className="bg-white flex   flex-col md:flex-row rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[60%]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        {/* <button
          onClick={onClose}
          className="fixed z-40 top-4 left-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          <IoClose size={24} className="text-gray-600" />
        </button> */}

        {/* Left Side Image */}
        <div className="md:w-1/2 h-full flex justify-center items-center relative">
          <img
            src="/login/12123.png"
            alt="Login"
            className="w-full xs:h-64 md:object-cover md:h-full"
          />
        </div>

        {/* Right Side Form (Scrollable) */}
        <div className="md:w-1/2 flex relative flex-col justify-center items-center p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-40 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          <IoClose size={24} className="text-gray-600" />
        </button>
          <div className="flex flex-col w-[87%] space-y-4">
            <img className="xs:h-12 xs:w-12 md:h-16 mx-auto md:w-16" src="/login/logo.png" alt="Logo" />
            <h1 className="xs:text-3xl md:text-4xl font-bold text-center">Register <span className="text-[#00743C]">for free</span></h1>
            <h4 className="text-center xs:text-xs md:text-lg text-xl font-semibold text-gray-600">
              Whether you already run your shop or plan to open it soon
            </h4>

  
  <RegisterToBuyForm />





            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterToBuyModal;
