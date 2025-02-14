"use client";
import Link from "next/link";
import React from "react";

const SellYourBrandBtn = () => {
  return (
    <Link href={"/sell-your-brand"}>
      <h3
        // onClick={gotoSellYourBrand}
        className="cursor-pointer hover:underline text-sm"
      >
        Sell Your Brands
      </h3>
    </Link>
  );
};

export default SellYourBrandBtn;
