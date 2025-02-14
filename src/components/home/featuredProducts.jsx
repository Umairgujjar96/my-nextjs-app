"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const featuredProduct = [
    { img: "/home/FeaturedProducts/1.png", title: "MTR Tomato Pickle", MSRP: 0 },
    { img: "/home/FeaturedProducts/2.png", title: "Wagh Bakri Tea Loose", MSRP: 0 },
    { img: "/home/FeaturedProducts/3.png", title: "Patak's Tandoori Paste", MSRP: 0 },
    { img: "/home/FeaturedProducts/4.png", title: "Kala Jeera Shahi Ali Baba 20x50g", MSRP: 0 },
    { img: "/home/FeaturedProducts/5.png", title: "Shan Pav Bhaji Spice Mix", MSRP: 0 },
    { img: "/home/FeaturedProducts/6.png", title: "Shan Chicken Jalfrezi Spice Mix", MSRP: 0 },
    { img: "/home/FeaturedProducts/7.png", title: "Black Pepper Coarse Ali Baba", MSRP: 0 },
    { img: "/home/FeaturedProducts/8.png", title: "Adan XXL Sella Basmati Rice", MSRP: 0 },
    { img: "/home/FeaturedProducts/9.png", title: "MTR Tomato Pickle 24x300G", MSRP: 0 },
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
    <div className="flex flex-col bg-[#eaf7ee] py-12 items-center">
      <h1 className="text-3xl text-[#00422F] font-bold mb-4">Featured Products</h1>
      <div className="w-full px-4">
        <Slider {...settings}>
          {featuredProduct.map((item, index) => (
            <div key={index} className="p-2">
            <div className="p-4 text-center flex flex-col justify-between h-full">
              <div className=" rounded-3xl py-4 flex flex-col h-full">
                {/* Image */}
            <div className="bg-white rounded-2xl  overflow-hidden">
                <img 
                    src={item.img} 
                     alt={item.title} 
                        className="w-full h-52 object-cover mb-2  transform transition-all duration-500 ease-in-out hover:scale-110" 
                             />
                                </div>

                {/* Title & MSRP */}
                <div className="flex-grow">
                  <h3 className="text-base font-semibold min-h-[48px] flex items-center justify-center px-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs">MSRP: €{item.MSRP}.00</p>
                </div>
          
                {/* Ensure last <p> aligns properly */}
                <p className="text-xs mt-4">Login to see wholesale prices</p>
              </div>
            </div>
          </div>
          
          ))}
        </Slider>
      </div>
      <button className="mt-4 text-lg bg-[#FFCF2A] font-semibold text-[#286f5d] p-2 px-5 rounded-3xl border-2 border-[#FFCF2A] hover:bg-[#eaf7ee] hover:-translate-y-2 duration-500 ease-in-out transform">
        Shop All
      </button>
    </div>
  );
};

export default FeaturedProducts;
