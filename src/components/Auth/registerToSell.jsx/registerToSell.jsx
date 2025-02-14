import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbChartCircles } from "react-icons/tb";
import RegisterToSellForm from "./registerToSellForm";

const RegisterToSell = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/login/registerToSell.png')] mb-3 bg-cover bg-center h-full w-full">
        <div className="flex gap-5 flex-col text-center my-32 justify-center">
          <h1 className="text-5xl">Ready to Begin Your Next Adventure</h1>
          <p>We Connect You With Independent Ethnic Retailers</p>
        </div>
      </div>

      <div className="flex xs:flex-col md:flex-row gap-5 mb-5 mx-8">
        <div className="flex xs:mt-16 md:mt-10 basis-[50%] gap-8 flex-col">
          <div className="flex xs:gap-2 md:gap-4 ml-8 xs:flex-col md:flex-row">
            <div className="flex items-center justify-center bg-[#00422F] rounded-full xs:w-10 xs:h-10 md:w-16 md:h-9 ">
              <BsPatchCheck className="text-white text-3xl" />
            </div>
            <div className="flex gap-1 flex-col">
              <h1 className="text-lg font-semibold text-[#00422F]">
                Connect with Verified Suppliers
              </h1>
              <p className="text-[#00422F] text-base">
                Through Thokmandee boost your business with exposure to verified
                independent retailers in European Union and beyond.
              </p>
            </div>
          </div>

          <div className="flex xs:gap-2 md:gap-4 ml-8 xs:flex-col md:flex-row">
            <div className="flex items-center justify-center bg-[#00422F] rounded-full xs:w-10 xs:h-10 md:w-12 md:h-9">
              <RiSecurePaymentLine className="text-white text-3xl" />
            </div>
            <div className="flex gap-1 flex-col">
              <h1 className="text-lg font-semibold text-[#00422F]">
                Secure & Instant Payment
              </h1>
              <p className="text-[#00422F] text-base">
                You get paid instantly by us and we cover up to 60-90 day
                payment terms for your customers.
              </p>
            </div>
          </div>

          <div className="flex xs:gap-2 md:gap-4 ml-8 xs:flex-col md:flex-row">
            <div className="flex items-center justify-center bg-[#00422F] rounded-full xs:w-10 xs:h-10 md:w-20 md:h-9">
              <TbChartCircles className="text-white text-3xl" />
            </div>
            <div className="flex gap-1 flex-col">
              <h1 className="text-lg font-semibold text-[#00422F]">
                Connect with Verified Suppliers
              </h1>
              <p className="text-[#00422F] text-base">
                We are working hard to make your business efficient, with easy
                to use order management system, We do marketing for you and take
                care of your customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#00422F] basis-[50%] text-center py-8 rounded-3xl">
          <h2 className="text-white font-bold text-3xl">Vendor Registration</h2>
          <RegisterToSellForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterToSell;
