import React from "react";

const HowtoRegister = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-16 bg-green-50">
      <h3 className="text-3xl text-[#00422F] font-bold mb-10">
        How to Register in 3 Simple Steps
      </h3>

      <div className="flex xs:hidden md:flex flex-row items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-[#00422F] font-bold rounded-full text-xl border-2 border-yellow-400">
          1
        </div>
        <div className="hidden md:block mx-4 w-52 h-2 bg-yellow-400"></div>
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-[#00422F] font-bold rounded-full text-xl border-2 border-yellow-400">
          2
        </div>
        <div className="hidden md:block mx-4 w-52 h-2 bg-yellow-400"></div>
        <div className="w-16 h-16 flex items-center justify-center bg-yellow-400 text-[#00422F] font-bold rounded-full text-xl border-2 border-yellow-400">
          3
        </div>
      </div>

      <div className="flex flex-col xs:items-center md:items-start md:flex-row gap-7 md:gap-20 mt-4 mx-auto">
        <div className="w-10 h-10 xs:flex md:hidden flex items-center justify-center bg-yellow-400 text-[#00422F] font-bold rounded-full text-xl border-2 border-yellow-400">
          1
        </div>

        <div className="w-56">
          <p>Click "Register Now" to start the process.</p>
        </div>
        <div className="w-10 h-10 xs:flex md:hidden flex items-center justify-center bg-yellow-400 text-[#00422F] font-bold rounded-full text-xl border-2 border-yellow-400">
          2
        </div>

        <div className="w-56">
          <p>
            Complete the registration form with your company details and apply
            for wholesale status directly from the dashboard.
          </p>
        </div>
        <div className="w-10 h-10 xs:flex md:hidden flex items-center justify-center bg-yellow-400 text-[#00422F] font-bold rounded-full text-xl border-2 border-yellow-400">
          3
        </div>
        <div className="w-56">
          <p>
            After reviewing and approving your application, you'll be ready to
            enjoy wholesale experience.
          </p>
        </div>
      </div>
      <button className="px-6 py-2 mt-5 font-bold text-[#5AAF2A] bg-yellow-400 hover:bg-transparent hover:-translate-y-3 border border-yellow-400 duration-300 rounded-3xl ">
        Register Now
      </button>
    </div>
  );
};

export default HowtoRegister;
