"use client";
import Link from "next/link";
import React from "react";

const ShopBrandsBtn = () => {
  return (
    <Link href={"/shop-brands"}>
      <h3 className="cursor-pointer hover:underline text-sm">Shop Brands</h3>
    </Link>
  );
};

export default ShopBrandsBtn;
