"use client";
import Link from "next/link";
import React from "react";

const RegisterToSellContactBtn = () => {
  return (
    <Link href={"/registerToSell"}>
      <button className="w-44 py-2 font-bold hover:text-white text-[#00422F] border-2 hover:-translate-y-2 border-[#00422F] bg-white hover:bg-[#00422F] rounded-full transition duration-300">
        Register to Sell
      </button>
    </Link>
  );
};

export default RegisterToSellContactBtn;
