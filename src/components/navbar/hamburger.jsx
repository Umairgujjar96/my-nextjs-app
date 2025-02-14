"use client"
import React, { useState } from 'react'

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
      
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      }
  return (
    
    <div className="container mx-auto">
    {/* Hamburger Icon */}
    <div className="flex justify-between items-center px-5 py-3 md:hidden">
      <button onClick={toggleMenu} className="text-xl">
        &#9776; {/* Hamburger icon (three horizontal bars) */}
      </button>
    </div>

    {/* Menu Items */}
    <ul className={` flex-col space-x-1 md:hidden text-sm justify-center items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
      <li className="cursor-pointer px-2 py-2">Desi Grocery</li>
      <li className="cursor-pointer px-2 py-2">Beauty & Wellness</li>
      <li className="cursor-pointer px-2 py-2">Food & Drinks</li>
      <li className="cursor-pointer px-2 py-2">Fashion Accessories</li>
      <li className="cursor-pointer px-2 py-2">Home & Kitchen</li>
      <li className="cursor-pointer px-2 py-2">New Arrivals</li>
      <li className="cursor-pointer px-2 py-2">Discover Brands</li>
      <li className="cursor-pointer px-2 py-2">Careers</li>
      <li className="cursor-pointer px-2 py-2">Private Label</li>
    </ul>
  </div>

  )
}

export default Hamburger