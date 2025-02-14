"use client";
import Link from "next/link";
import React from "react";

const VisitMarketPlacebtn = () => {
  return (
    <Link href={"/"}>
      <h3 className="absolute xs:bg-[#FFFF] md:bg-inherit xs:left-8 xs:text-left xs:text-lg xs:text-black xs:bottom-6 xs:rounded-full xs:px-3 md:rounded-none  md:text-right md:bottom-12 md:right-16 md:text-white md:text-xl md:underline md:font-medium cursor-pointer">
        Visit MarketPlace
      </h3>
    </Link>
  );
};

export default VisitMarketPlacebtn;

// absolute md:bottom-12  md:text-xl xs:text-lg xs:no-underline  md:underline  xs:left-8 md:right-16 xs:bottom-6 md:text-white font-medium cursor-pointer xs:bg-white md:bg-none  xs:text-black xs:px-4 xs:py-1 xs:rounded-3xl md:rounded-none
