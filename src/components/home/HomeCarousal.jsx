"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";

const HomeCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {/* ✅ Slide 1: Background Image with Overlay */}
        <div className="relative h-screen bg-[url('/home/carousal1.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>{" "}
          {/* Dark Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10 z-10">
            <h1 className="px-6 md:px-10 py-4 rounded-3xl border-b-8 border-yellow-500 font-serif shadow-lg text-[#00743C] bg-yellow-400 text-2xl md:text-4xl font-extrabold">
              Grab Wholesale Deals Now
            </h1>
            <p className="text-lg md:text-2xl text-white font-semibold mt-4">
              Access Quality Products for Your Business in{" "}
              <span className="font-bold">One Place</span>
            </p>
            <button className="bg-[#BFFFCF] px-6 py-3 mt-6 rounded-3xl text-green-900 font-semibold text-lg border-2 border-[#BFFFCF] transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white hover:-translate-y-2">
              Get Special Offers
            </button>
          </div>
        </div>

        {/* ✅ Slide 2: ThokMandiPay */}
        <div className="relative h-screen bg-orange-500 flex items-center justify-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 items-center gap-6 w-full max-w-7xl">
            {/* ✅ Left Section */}
            <div className="text-white text-center md:text-left space-y-6">
              <h4 className="text-lg font-semibold uppercase">
                Introducing ThokMandiPay
              </h4>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Grow Your Business
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Buy Now, Pay Later
              </h1>
              <p className="text-lg">
                *Buy Your Inventory Today,{" "}
                <strong className="text-yellow-300">
                  and Pay up to 60 Days
                </strong>
              </p>
              <button className="bg-pink-900 px-6 py-3 rounded-3xl text-white font-semibold border-2 border-pink-900 transition-all duration-300 hover:bg-transparent hover:border-white hover:-translate-y-2">
                Apply For Free
              </button>
            </div>

            {/* ✅ Right Section (Image) */}
            <div className="flex justify-center">
              <img
                src="/home/Foil-Business-Cards-edited2.png"
                alt="ThokMandiPay"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* ✅ Disclaimer (Positioned at Bottom) */}
          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base font-bold opacity-80">
            *For eligible buyers only. Terms & conditions apply
          </p>
        </div>

        {/* ✅ Slide 3: Wholesale Experience */}
        <div className="relative h-screen bg-[#00743C] flex items-center justify-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 items-center gap-6 w-full max-w-7xl">
            {/* ✅ Left Section */}
            <div className="text-white text-center md:text-left space-y-6">
              <h4 className="text-lg font-semibold uppercase">
                Wholesale Made Convenient
              </h4>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Crafting Wholesale
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Experience for Retailers
              </h1>
              <p className="text-lg">
                20,000+ Products.{" "}
                <strong className="text-yellow-300">
                  Unlimited Opportunities
                </strong>
              </p>
            </div>

            {/* ✅ Right Section (Image) */}
            <div className="flex justify-center">
              <img
                src="/home/carousal1.png"
                alt="Wholesale Deals"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousal;
