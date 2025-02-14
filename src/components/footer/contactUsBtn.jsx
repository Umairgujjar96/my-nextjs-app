"use client";
import Link from "next/link";
import React from "react";

const ContactUsBtn = () => {
  return (
    <Link href={"/contact-us"}>
      <h3
        // onClick={gotoContactUs}
        className="cursor-pointer hover:underline text-sm"
      >
        Contact Us
      </h3>
    </Link>
  );
};

export default ContactUsBtn;
