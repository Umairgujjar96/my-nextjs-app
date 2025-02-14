import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='flex xs:flex-col md:flex-row '>
        <div className='basis-[50%]'>
            <img className='md:rounded-e-3xl xs:rounded-b-3xl' src='/aboutUs/2ndImage.png'></img>
        </div>
        <div className='basis-[50%] flex text-center px-12 md:gap-4 xs:gap-6 mt-20 mb-12 flex-col'>
            <h2 className='text-3xl font-semibold text-[#00422F]'>What We Do</h2>
            <h3 className='xs:text-xl md:text-lg text-gray-500 font-semibold'>Crafting Connections, Empowering Businesses</h3>
            <p className='xs:font-bold md:font-semibold text-gray-600'>When tradition meets innovation we create an open and welcoming space where business and culture coexist, we promote a community of cultural diversity all across Europe. An exclusive platform where businesses of all sizes can thrive!
            </p>
            <p className='md:px-2 xs:text-base text-gray-600'>We aim to provide trade-centred EASE. We ensure our stakeholders are successful in their business, whether as a buyer or a seller. We encourage incentive to grow, our platform delivers the tools and opportunities to expand your scope of reach, connect, and elevate your venture.</p>
        </div>
    </div>
  )
}

export default WhatWeDo