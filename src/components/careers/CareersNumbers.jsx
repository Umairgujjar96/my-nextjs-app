import React from "react";

const CareersNumbers = () => {
  return (
    <div className="bg-[url('/careers/map.png')] bg-cover bg-center w-full py-12 px-5 md:px-10 flex flex-col md:flex-row items-center justify-center md:space-x-5">
      {/** Single Item Wrapper **/}
      <div className="flex flex-col text-center xs:py-2 md:py-8 md:px-10   md:border-r-2 border-gray-700 last:border-none">
        <h4 className="xs:text-xl md:text-4xl font-bold text-[#00743C] mb-2">2003</h4>
        <p className="xs:text-sm md:text-lg">Foundation of the</p>
        <p className="xs:text-sm md:text-lg">Amanat Group</p>
      </div>

      <div className="flex flex-col xs:py-2 text-center md:py-8 md:px-10   md:border-r-2 border-gray-700 last:border-none">
        <h4 className="xs:text-xl md:text-4xl font-bold text-[#00743C] mb-2">20K+</h4>
        <p className="xs:text-sm md:text-lg">Independent brands</p>
        <p className="xs:text-sm md:text-lg">on Thokmandee</p>
      </div>

      <div className="flex flex-col xs:py-2 text-center md:py-8 md:px-10   md:border-r-2 border-gray-700 last:border-none">
        <h4 className="xs:text-xl md:text-4xl font-bold text-[#00743C] mb-2">100+</h4>
        <p className="xs:text-sm md:text-lg">Trusted by diverse</p>
        <p className="xs:text-sm md:text-lg">partner companies</p>
      </div>

      <div className="flex flex-col xs:py-2 text-center md:py-8 md:px-10">
        <h4 className="xs:text-xl md:text-4xl font-bold text-[#00743C] mb-2">27</h4>
        <p className=" xs:text-sm md:text-lg">Countries served in the</p>
        <p className="xs:text-sm md:text-lg">European Union</p>
      </div>
    </div>
  );
};

export default CareersNumbers;
