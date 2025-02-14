import React from 'react';
import { FiCheckCircle } from "react-icons/fi";

const ConnectingVendors = () => {
    const Data = [
        {
            title: "Simplified Logistics",
            icon: <FiCheckCircle className="text-green-600 text-3xl" />,
            details: "We have done the work for you! Thokmandee has negotiated rates for our sellers with leading shipping companies, or go ahead and ship your way - we’re all about options."
        },
        {
            title: "Breezy Bulk Buying",
            icon: <FiCheckCircle className="text-green-600 text-3xl" />,
            details: "Retailers can buy our range with ease - bulk buying is easier than ever before. All the important information, paperwork, and buying details are tracked through our website."
        },
        {
            title: "Empowering Growth",
            icon: <FiCheckCircle className="text-green-600 text-3xl" />,
            details: "With our goal being convenience for our users, our purpose is for your business venture to flourish. Get in touch with us so we can help you plan your expansion and reach in Europe."
        },
    ];

    return (
        <div className="bg-[#E8FFED] flex flex-col md:flex-row items-center px-6 md:px-16 py-10 gap-10">
            {/* Left Side (Text Content) */}
            <div className="w-full md:w-1/2">
                <div className="text-start">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#00422F]">Connecting Vendors</h3>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#00743C]">Globally for Thriving Trade</h3>
                </div>

                <div className="flex flex-col gap-6 mt-8">
                    {Data.map((x, i) => (
                        <div className="flex items-start gap-4" key={i}>
                            <div className="w-10 flex justify-center">{x.icon}</div>
                            <div>
                                <h4 className="text-xl font-semibold text-[#00743C]">{x.title}</h4>
                                <p className="text-gray-700 leading-relaxed">{x.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img className="max-w-full md:max-w-md rounded-xl" src="/aboutUs/connecting-vendors-img.png" alt="Connecting Vendors" />
            </div>
        </div>
    );
};

export default ConnectingVendors;
