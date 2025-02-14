import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import ContactUsBtn from "./footer/aboutUsBtn";
import AboutUsBtn from "./footer/aboutUsBtn";
import ContactUsBtn from "./footer/contactUsBtn";
import CareersBtn from "./footer/CareersBtn";
import SellYourBrandBtn from "./footer/sellYourBrandBtn";
import ShopBrandsBtn from "./footer/shopBrandsBtn";
const Footer = () => {
  return (
    <div className="bg-[#00422F] text-white py-8 ">
      {/* Top Section */}

      <div className="flex mt-6  sm:flex-col px-4 md:px-16 flex-col md:flex-row md:justify-between gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center xs:flex-col md:items-start">
          <h1 className="text-3xl xs:text-center md:text-start font-bold font-serif">
            Crafting Connections,{" "}
            <span className="text-[#BFFFCF]">Empowering Businesses.</span>
          </h1>
          <div className="flex text-[#BFFFCF] text-3xl space-x-3 mt-4">
            <FaFacebook className="transition-transform duration-200 hover:scale-110  cursor-pointer" />
            <FaInstagram className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
            <FaLinkedin className="transition-transform duration-200 hover:scale-110 cursor-pointer" />
          </div>
        </div>

        {/* Center & Right Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Company Section */}
          <div className="flex flex-col xs:text-center md:text-start space-y-2">
            <h1 className="text-xl font-semibold">Company</h1>
            <AboutUsBtn />
            <CareersBtn />
           <SellYourBrandBtn />
            <ShopBrandsBtn />
          </div>

          {/* Help & Info Section */}
          <div className="flex flex-col  xs:text-center md:text-start space-y-2">
            <h1 className="text-xl font-semibold">Help & Info</h1>
            <h3 className="cursor-pointer hover:underline text-sm">
              Financial Terms and Conditions
            </h3>
            <h3 className="cursor-pointer hover:underline text-sm">
              Vendors Terms of Service
            </h3>
            <h3 className="cursor-pointer hover:underline text-sm">
              Wholesale Buyer Terms of Service
            </h3>
          </div>

          {/* Inquiry Section */}
          <div className="flex flex-col  xs:text-center md:text-start space-y-2">
            <h1 className="text-xl  font-semibold">Inquire</h1>
            

            <ContactUsBtn />
            <h3 className="cursor-pointer hover:underline text-sm">
              info@staging.thokmandee.com
            </h3>
            <h3 className="cursor-pointer hover:underline text-sm">
              +34 911 984 799
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Divider Here */}
      <div className="left-0 border-t border-0 border-white mt-16" />
      <div className=" mt-6 px-4 md:px-16 pt-2 flex flex-col md:flex-row md:justify-between items-center md:items-start text-sm">
        <h4>© 2024 Thokmandee. All Rights Reserved.</h4>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <h4 className="cursor-pointer hover:underline pr-3 border-r-2">Refund & Returns Policy</h4>
          <h4 className="cursor-pointer hover:underline pr-3 border-r-2">Terms of Service</h4>
          <h4 className="cursor-pointer hover:underline">Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
