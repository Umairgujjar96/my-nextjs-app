import React from 'react'

const WholeSaleCommerce = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='basis-[50%]'>
            <img src='/home/wholeSale.png' className='w-full h-[100%] 2xl:max-h-96'></img>
        </div>
        <div className='basis-[50%] bg-[#E8FFED]'>
            <div className='flex md:mt-10 xs:mt-16 flex-col xs:gap-8 my-12 md:gap-5'>
                <div className='mx-auto text-2xl md:text-3xl px-28 md:px-32 text-center font-bold'>
                    <h1 className='text-[#004331]'><span className='text-[#208a70]'>Wholesale Commerce</span> Turned Convenient</h1>
                </div>
                <div className='mx-auto px-7 md:px-20 text-gray-500 text-center font-bold'>
                    <h3>We're on an active mission to create an ecosystem which encourages brands and independent retailers to thrive.</h3>
                </div>
                <div className='px-8 md:px-16  text-gray-600 text-center '>
                    <p>We ensure our sellers are successful in their trade; whether as a buyer or a seller. Our platform ensures to provide the tools and opportunities to expand your scope of reach, connect with like-minded businesses, and elevate your venture.</p>
                </div>
                <div className='mx-auto'>
                <button className="mt-3 text-base bg-[#FFCF2A] font-semibold text-[#004331] p-2 px-7 rounded-3xl border-2 border-[#FFCF2A] hover:bg-[#eaf7ee] hover:-translate-y-2 duration-500 ease-in-out transform">
        Curious to Know More ?
      </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WholeSaleCommerce