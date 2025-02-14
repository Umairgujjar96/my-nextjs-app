"use client";
import Link from "next/link";
import React from "react";

const CareersBtn = () => {
  return (
    <Link href={"/careers"}>
      <h3
        // onClick={gotoCareers}
        className="cursor-pointer hover:underline text-sm"
      >
        Careers
      </h3>
    </Link>
  );
};

export default CareersBtn;
