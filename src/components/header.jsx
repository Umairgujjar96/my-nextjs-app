// "use client"

import React from "react";
import Uppernav from "./navbar/uppernav.jsx";
import LowerNav from "./navbar/lowernav.jsx";
import Menu from "./navbar/Menu.jsx";
import { categories } from "./navbar/lowernav.jsx";
import LoginButton from "./navbar/loginButton.jsx";
import RegisterToBuyBtn from "./navbar/registerToBuyBtn.jsx";
import RegisterToSellBtn from "./navbar/registerToSellBtn.jsx";
import LogoBtn from "./navbar/LogoBtn.jsx";
const Header1 = () => {

  
  
  return (
    <div>
      
      <Uppernav />



      <nav className="bg-white mx-3 p-4">
        <div className="mx-auto sm:mx-[0%] lg:gap-0 gap-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Logo */}
          <div className="xs:flex">
         
         <LogoBtn />
          <div className="flex xs:visible md:hidden  justify-center items-center">
      <Menu categories={categories} />
    </div>
    </div>

          {/* Search Bar */}
          {/* <div className="flex-1 mx-6"> */}
          <div className="relative xs:w-[100%] sm:w-[550px] lg:w-[48%] mx-3 ">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search for brands, product or a category"
              className="w-full sm:text-base md:text-lg xs:font-semibold md:font-bold text-gray-400 placeholder:text-gray-500 placeholder:font-semibold xs:placeholder:text-base md:placeholder:text-lg border pl-10 py-2 border-gray-400 rounded-full "
            />
          </div>
          {/* </div> */}

          {/* Buttons */}
          <div className="flex xs:flex-col sm:flex-row md:ml-4 xs:items-center sm:items-start sm:gap-44 lg:gap-4">
            <div className="inline-flex xs:pb-4 sm:justify-center items-center md:pt-3 hover:cursor-pointer">
              <img src="/home/user-icon.png" className="h-5" />
              

              <LoginButton />

            </div>
            <div className="inline-flex md:pt-4 xs:gap-3">

              <RegisterToBuyBtn />

              <RegisterToSellBtn />
            </div>
          </div>
        </div>
      </nav>
      <LowerNav />
    </div>
  );
};

export default Header1;
