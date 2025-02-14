import React from "react";

const TalkAboutWholeSale = () => {
    const Data=[
        {
          bg: "bg-[#F8E1E9]",
          icon: "/contactUs/icon-c1.svg",
          title: "Email Address",
          details: ["info@staging.thokmandee.com"],
          action: "Send Inquiry",
          textbg: "text-[#8F0033]",
        },
        {
          bg: "bg-[#FFE1C7]",
          icon: "/contactUs/icon-c2-1.svg",
          title: "Contact Info",
          details: [
            "Spain Phone: +34 911 984 799",
            "Sweden Phone: +46 101 992 531",
            "WhatsApp: +34 624 634 639",
            "(text message only)",
          ],
          action: "Send Message",
          textbg: "text-[#BA823F]",
        },
        {
          bg: "bg-[#D3FFEE]",
          icon: "/contactUs/icon-c3.svg",
          title: "Location",
          details: ["Gutiérrez Herrero, 52, 33402", "AVILÉS, Spain"],
          action: "Get Directions",
          textbg: "text-[#007641]",
        },
      ]
  return (
    <div className="flex flex-col py-16 gap-10">
      {/* Heading */}
      <h2 className="text-4xl text-center font-bold">
        Let’s Talk about <span className="text-[#00743C]">Wholesale</span>
      </h2>

      {/* Contact Sections */}
      <div className="flex flex-wrap md:mx-10 xs:gap-5 mt-10">
        
        {Data.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} flex flex-col items-center text-center mx-auto py-10 w-96 md:px-[90px] rounded-3xl shadow-md justify-between`}
          >
            {/* Icon */}
            <img className="h-12 w-12 mb-2" src={item.icon} alt={`${item.title} Icon`} />

            {/* Title */}
            <h4 className="text-2xl text-[#007641] font-semibold">{item.title}</h4>

            {/* Details */}
            <div className="text-gray-700 flex flex-col gap-1">
              {item.details.map((detail, i) => (
                <p key={i} className="text-sm">
                  {detail}
                </p>
              ))}
            </div>

            {/* Action Button */}
            <p className={`${item.textbg} mt-7 font-medium cursor-pointer underline`}>
              {item.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalkAboutWholeSale;
