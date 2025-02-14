"use client";
import { useParams } from "next/navigation";
import React from "react";

const ProductPage = () => {
  const params = useParams();
  const decoded = decodeURIComponent(params.slug);
  return (
    <div className="py-12">
      <h1 className="text-center font-extralight text-4xl font-serif text-[#00743C]">
        {decoded}
      </h1>
    </div>
  );
};

export default ProductPage;
