"use client"
import React, { useState } from 'react'
import RegisterToBuyModal from '../Auth/registerToBuy/registerToBuyModal';

const RegisterToBuyContactBtn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal=()=>{
        setIsModalOpen(!isModalOpen)
    }

  return (
    <div>
    <button onClick={toggleModal} className="w-44 py-2 font-bold text-[#00422F] border-2 hover:-translate-y-2 border-[#FFCF2A] bg-[#FFCF2A] hover:bg-white rounded-full transition duration-300">
                Register to Buy
            </button>
            <RegisterToBuyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
  )
}

export default RegisterToBuyContactBtn