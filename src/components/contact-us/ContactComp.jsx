import React from "react";
import RegisterToBuyContactBtn from "./registerToBuyContactBtn";
import RegisterToSellContactBtn from "./registerToSellContactBtn";
import SendMessageForm from "./SendMessageForm";

const ContactComp = () => {

  return (
    <div className="flex flex-col justify-center gap-4 my-10 items-center">
      <div>
        <h3 className="text-3xl text-[#00422F] font-bold">We Are Glad to See You!</h3>
      </div>
      <div>
        <h4 className="text-xl text-gray-600 mb-2">
          You have some questions about the product or need assistance, feel free to ask!
        </h4>
      </div>
      <div className="flex flex-row gap-6">
        <RegisterToBuyContactBtn />
        <RegisterToSellContactBtn />
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl p-6 rounded-lg shadow-xl border-2 border-gray-200 mt-6">
        
     <SendMessageForm />

      </div>
      <div className="pt-10">
      <p className="text-base">Thokmandee is a company registered in Spain.</p>
      </div>
    </div>
  );
};

export default ContactComp;
