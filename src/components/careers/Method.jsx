import React from "react";

const Method = () => {
  const Data = [
    {
      icon: "/careers/1.svg",
      title: "Apply",
      detail:
        "For the first step, submit an eye-catching resume, portfolio, and cover letter to apply for the current opportunity available.",
    },
    {
      icon: "/careers/2.svg",
      title: "Review",
      detail:
        "Now, the information you provided undergoes a thorough review by our experts to ensure none of your achievements are overlooked.",
    },
    {
      icon: "/careers/3.svg",
      title: "Interview",
      detail:
        "Once you are shortlisted, our talent acquisition specialists will promptly reach out to you to advance the process.",
    },
    {
      icon: "/careers/4.svg",
      title: "Onboarding",
      detail:
        "From introducing you to Thokmandee's vibrant culture to ensuring a smooth transition, our onboarding team supports you every step of the way.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-5 md:px-10 py-10">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <h3 className="text-3xl font-bold text-[#007641] mb-3">
          We Make Hiring Simple & Efficient
        </h3>
        <p className="text-lg text-gray-600">
          While maintaining transparency at the core, we look for change-makers
          like you!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {Data.map((x, i) => (
          <div
            key={i}
            className="bg-[#F8E1E9] p-6 rounded-xl shadow-md flex flex-col text-start items-start px-10"
          >
            <img src={x.icon} alt={x.title} className="w-12 h-12 mb-4" />
            <h4 className="text-2xl font-semibold text-[#8F0033]">{x.title}</h4>
            <p className="text-gray-700 mt-2">{x.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Method;
