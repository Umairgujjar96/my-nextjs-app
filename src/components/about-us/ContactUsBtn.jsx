"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ContactUsBtn = () => {
  return (
    <Link href={"/contact-us"}>
      <button className="text-[#00743C] bg-[#FFCF2A] px-8 border-2 border-[#FFCF2A] py-2 rounded-3xl text-base font-medium transition-transform duration-300 hover:-translate-y-2 hover:bg-transparent hover:text-white">
        Contact Us
      </button>
    </Link>
  );
};

export default ContactUsBtn;
