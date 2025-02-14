"use client";
import Link from "next/link";
import React from "react";

const AboutUsBtn = () => {
  return (
    <Link href={"/about-us"}>
      <h3
        // onClick={gotoAboutUs}
        className="cursor-pointer hover:underline text-sm"
      >
        About Us
      </h3>
    </Link>
  );
};

export default AboutUsBtn;
