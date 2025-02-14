"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const Stories = [
    {
      icon: "/sellYourBrand/dummy-img.png",
      name: "Haseeb Faisal",
      position: "Global One",
      review:
        "With ThokMandi, we have expanded to multiple shops, ensuring international growth with guaranteed local EU bodies. It's a pivotal factor for our next growth stage.",
    },
    {
      icon: "/sellYourBrand/dummy-img.png",
      name: "Geovanni Secco",
      position: "Ragabites",
      review:
        "With ThokMandi, we have expanded to multiple shops, ensuring international growth with guaranteed local EU bodies. It's a pivotal factor for our next growth stage.",
    },
    {
      icon: "/sellYourBrand/dummy-img.png",
      name: "Esmeralda Spaans",
      position: "Numbers Delights",
      review:
        "With ThokMandi, we have expanded to multiple shops, ensuring international growth with guaranteed local EU bodies. It's a pivotal factor for our next growth stage.",
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col px-4 py-10">
      <div className="mb-2 text-start">
        <h2 className="text-3xl font-bold">Success Stories</h2>
        <p className="text-lg mt-2">
          Reach a wide array of retailers and consumers across different
          European regions.
        </p>
      </div>

      {/* Carousel container */}
      <div className="mx-auto w-full">
        <Slider {...settings}>
          {Stories.map((x, i) => (
            <div key={i} className="flex justify-center px-4 py-6 mx-4">
              <div className="border-2 border-gray-600 flex flex-col rounded-3xl overflow-hidden shadow-lg w-full xs:w-[99%]">
                <div className="flex flex-col xs:text-center xs:items-center md:text-start md:items-start md:flex-row gap-4 bg-[#00422F] p-5 rounded-t-3xl">
                  <img
                    src={x.icon}
                    alt={x.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="my-auto">
                    <h5 className="text-white font-bold text-xl">{x.name}</h5>
                    <p className="text-white text-base italic">{x.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-gray-700">
                    "{x.review}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Custom CSS for bigger dots */}
    </div>
  );
};

export default SuccessStories;
