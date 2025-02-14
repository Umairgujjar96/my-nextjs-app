"use client";
import Link from "next/link";
import React from "react";

const RegisterToSellBtn = () => {
  return (
    <Link href={"/registerToSell"}>
      <button
        // onClick={gotoregister}
        className="px-2  md:w-36 text-sm md:px-0 py-2 sm:py-1  sm:w-36 font-bold hover:text-[#00422F] text-white border-2 hover:-translate-y-2 border-[#00422F] bg-[#00422F] hover:bg-white rounded-full transition duration-300"
      >
        Register to Buy
      </button>
    </Link>
  );
};

export default RegisterToSellBtn;
