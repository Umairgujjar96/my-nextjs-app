"use client"
import React, { useState } from 'react'
import RegisterToBuyModal from '../Auth/registerToBuy/registerToBuyModal';

const RegisterToBuyBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal=()=>{
        setIsModalOpen(!isModalOpen)
    }

  return (
    <div>
    <button onClick={toggleModal} className="px-2 text-sm md:w-36 md:px-0 py-2 sm:py-1  sm:w-36 font-bold text-[#00422F] border-2 hover:-translate-y-2 border-[#FFCF2A] bg-[#FFCF2A] hover:bg-white rounded-full transition duration-300">
                Register to Sell
            </button>
            <RegisterToBuyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
  )
}

export default RegisterToBuyBtn