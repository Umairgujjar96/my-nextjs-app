"use client";
import React from "react";
import Link from "next/link";
const LoginButton = () => {
  return (
    <Link href={"/login"}>
      <button className="px-1  font-bold py-2 text-[#00422F]">Login</button>
    </Link>
  );
};

export default LoginButton;
