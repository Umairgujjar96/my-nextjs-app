"use client";
import Link from "next/link";
import React from "react";

const LogoBtn = () => {
  return (
    <div className="cursor-pointer">
      <Link href={"/"}>
        <img
          // onClick={gotoHome}
          src={"/home/Thokmandee-Logo.png"}
          className=" sm:h-16 sm:w-80 md:h-9 md:w-60"
        />
      </Link>
    </div>
  );
};

export default LogoBtn;
