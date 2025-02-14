"use client";
import Link from "next/link";
import React from "react";

const ExploreCategories = () => {
  const categories = [
    {
      img: "/home/image-p1.png",
      name: "Atta & Flours",
    },
    {
      img: "/home/image-p2.png",
      name: "Rice",
    },
    {
      img: "/home/image-p4.png",
      name: "Dairy",
    },
    {
      img: "/home/image-p5.png",
      name: "Daal & Lentils",
    },
    {
      img: "/home/image-p6.png",
      name: "Masala & Spices",
    },
    {
      img: "/home/image-p7.png",
      name: "Ready to Eat",
    },
    {
      img: "/home/image-p9.png",
      name: "Cleaning Supplies",
    },
    {
      img: "/home/image-p10.png",
      name: "Snacks",
    },
    {
      img: "/home/image-p11.png",
      name: "Beauty Essentials",
    },
    {
      img: "/home/image-p88.png",
      name: "Beverages",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <div className="flex-col my-10 space-y-3">
          <h1 className="text-3xl font-bold text-[#00422F]">
            Explore Categories
          </h1>
          <p className="text-gray-600 font-semibold text-base">
            20,000+ Unique products
          </p>
        </div>
      </div>
      <div className="flex gap-5 my-16 mx-8 justify-center flex-wrap">
        {categories.map((x, i) => (
          <div
            key={i}
            className="flex bg-[#E8FFED] flex-col rounded-3xl space-y-4 relative items-center overflow-hidden"
          >
            <Link href={`/productCategory/${x.name}`}>
              <img
                className="w-60 hover:-translate-y-3 duration-300 transition-all ease-in-out h-72 object-cover"
                src={x.img}
              />
            </Link>

            <h1 className="absolute bottom-4 text-center text-lg font-semibold px-2 py-1 rounded-md">
              {x.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
