import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const VendorInfo = () => {
  return (
    <div className='flex flex-col py-12 gap-4 items-center'>
        <h3 className='text-3xl font-bold text-[#00422F]'>Vendor Information Manual</h3>
        <h4 className='md:text-xl xs:text-base mx-16 text-center font-normal text-gray-600'>PLEASE READ THE GUIDLINES BEFORE PROCEEDING FURTHER</h4>
        <div className='flex flex-row space-x-12'>
            <div className='flex flex-row gap-2 items-center'>
            <FaArrowRight className='text-xl font-bold text-[#00422F]'/>
            <p className='text-lg'>Product Guidlines</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <FaArrowRight className='text-xl font-bold text-[#00422F]'/>
                <p className='text-lg'>Photograph Guidlines</p>
            </div>
        </div>
    </div>
  )
}

export default VendorInfo