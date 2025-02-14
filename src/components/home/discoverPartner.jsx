"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiscoverPartner = () => {
  const featuredProduct = [
    { img: "/home/brands/evermart-09.png", title: "evermart" },
    { img: "/home/brands/eximagro-06.png", title: "eximagro" },
    { img: "/home/brands/Numbersdelights.png", title: "NumbersDelights" },
    { img: "/home/brands/ragabites.png", title: "ragabites" },
    { img: "/home/brands/smooy-02.png", title: "smooy" },
    // { img: "/home/brands/v-logo-02.png", title: "vendorr" },
  ];

  const settings = {
    dots: false, // Show navigation dots below the slider
    infinite: true, // Enable infinite looping of slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 5, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to move per scroll
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Delay between auto-play transitions (ms)
    arrows: false, // Show left/right navigation arrows
    pauseOnHover: true, // Pause autoplay when hovering over a slide
    draggable: true, // Allow dragging slides with a mouse
    swipe: true, // Enable swipe gestures for touch devices
    swipeToSlide: true, // Allows users to drag directly to a slide
    adaptiveHeight: false, // Adjust slider height based on slide content
    centerMode: false, // Center the active slide
    centerPadding: "50px", // Padding on the sides when centerMode is enabled
    fade: false, // Enables a fade effect instead of slide transition
    cssEase: "ease-in-out", // CSS transition effect (e.g., "linear", "ease-in-out")
    variableWidth: false, // Allows slides of different widths
    responsive: [
      {
        breakpoint: 1024, // For screens ≤ 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens ≤ 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For screens ≤ 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    rtl: false, // Enable right-to-left (useful for Arabic/Hebrew text)
    focusOnSelect: false, // Clicking a slide moves it into view
    initialSlide: 0, // Set the slide index to start from
    waitForAnimate: true, // Wait for animations to finish before scrolling
    edgeFriction: 0.15, // Friction at the edges (higher values make it harder to swipe past last slide)
    touchMove: true, // Allow touch interactions
    touchThreshold: 5, // Sensitivity for touch gestures
    accessibility: true, // Enable keyboard navigation (left/right arrows)
    lazyLoad: "ondemand", // Load images only when needed ("progressive" is another option)
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] py-12 items-center">
      <h1 className="text-3xl text-[#00422F] font-bold mb-4">Discover Partner Brands</h1>
      <p className="text-sm mb-6">20,000+ Unique Brands</p>
      <div className="w-full px-4 md:px-8">
        <Slider {...settings}>
          {featuredProduct.map((item, index) => (
            <div key={index} className="mx-auto flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-56 rounded-full object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
      <button className="mt-12 text-lg bg-[#FFCF2A] font-semibold text-[#286f5d] p-2 px-5 rounded-3xl border-2 border-[#FFCF2A] hover:bg-[#eaf7ee] hover:-translate-y-2 duration-500 ease-in-out transform">
        Become a Partner
      </button>
    </div>
  );
};

export default DiscoverPartner;
