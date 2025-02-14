"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Thokmandee and how does it work?",
    answer: "Our primary objective is to ensure our sellers are successful in their trade; whether as a buyer or a seller. Thokmandee is your incentive to growth, our platform ensures to provide the tools and opportunities to expand your reach, connect with like-minded businesses, and elevate your venture. Our mission is to do so with an open and welcoming commercial centre where business and culture coexist. We are not just an average marketplace, we are a community committed to promoting cultural diversity in Europe through trade.",
  },
  {
    question: "I want to buy/sell on Thokmandee, how do I join?",
    answer: "Registering on Thokmandee is absolutely free. You can simply press register, and determine whether you are setting up a wholesale buyer or wholesale seller profile. Depending on what type of profile you will be setting up, make sure to overview vendor or buyer terms of service. Need more information? If you have any further questions, need help in setting up your profile or facing any issues, Contact us or chat with our team - ready to assist you 24/7.",
  },
  {
    question: "What if I'm not satisfied with a product? ",
    answer: "Thokmandee offers local EU return guarantee for first time buyers. If you are not satisfied with the delivered product, let us know and we will take care of the rest.",
  },
  {
    question: "What payment options does Thokmandee offer to support the growth of my business?",
    answer: "Our goal is to make sure your business is provided with maximum ease. We support you in growing your business - by providing assistance in expanding inventory. How? Qualified buyers have the flexibility to pay after up to 60 days. Go ahead, let your business flourish, and settle your dues when it's convenient for you. We're here to support your growth every step of the way.",
  },
];

const GotQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F4F3F3] mx-auto p-6 py-16 px-28">
      <h2 className="text-3xl font-bold text-center text-[#00422F] mb-6">Got Questions? We've Got Answers</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
            <div key={index}>
          <div  className="border-b border-[#00422F]">
            <button
              className="flex  justify-between items-center w-full text-[#00422F] py-4 text-lg text-left font-medium"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            
          </div>
          <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="p-4 text-gray-600">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GotQuestions;
