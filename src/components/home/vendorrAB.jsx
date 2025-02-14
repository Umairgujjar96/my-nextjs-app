import React from 'react'

const VendorrAB = () => {
  return (
    <div className='bg-white flex flex-col'>
        <div className='flex flex-col md:flex-row'>
            <div className='basis-[100%] md:basis-[50%] xs:order-1 md:order-none'>
                <div className='mx-12 xs:my-10 md:my-0 md:mt-10'>
                    <h1 className='text-2xl font-semibold text-[#00743C]'>Featured Brand</h1>
                    <div className='flex xs:flex-col xs:my-3 md:my-10 xs:gap-2 md:gap-12 md:flex-row'>
                        <img className='h-16 w-16 rounded-full' src='/home/featurebrnadlogo.png'></img>
                        <h1 className='md:text-4xl xs:text-xl md:mt-4 font-bold'>VENDORR AB</h1>
                    </div>
                    <h5 className='xs:text-sm md:text-lg font-semibold my-6'>A trusted wholesale distributor of premium Pakistani and Indian essentials, dedicated to offering quality products.</h5>
                    <p className='font-light xs:text-base my-2'>VENDORR AB provides a selection of high-demand essentials, including Chaunsa Mango Pulp, Toasted Chakki Atta, Sooji, and Fried Onions—ideal for those seeking authentic flavours that evoke a taste of home. Enhance your inventory with VENDORR’s exceptional range and experience the quality that sets them apart. Explore now and meet your wholesale needs with confidence.</p>
                    <button className='underline'>Browse Now</button>

                </div>
            </div>
            <div className='basis-[50%]'>
                <img className='object-cover w-full h-[500px]' src='/home/vendorr1.png'></img>
            </div>
        </div>
        <div className='flex flex-col md:flex-row'>
        <div className='basis-[50%]'>
            <img className='object-cover w-full h-[500px]' src='/home/vendorr2.png'></img>
        </div>
            <div className='basis-[50%] bg-[#E8FFED] xs:px-10 md:px-24 py-28 text-center m-auto'>
                <h1 className='font-semibold xs:text-2xl md:text-4xl my-4'>Unveiling a New Horizon</h1>
                <h2 className='text-[#00743C] font-bold xs:text-base md:text-xl my-4'>Private Label Services Now Available on Our B2B Multivendor Wholesale Marketplace</h2>
                <p className='xs:text-sm md:text-base'>Introducing private label services, where the marketplace continues to evolve, going beyond traditional wholesale transactions.</p>
                <button className='my-4 px-6 py-2 rounded-3xl font-semibold bg-[#FFCF2A] text-[#00743C] border-2 border-transparent hover:bg-[#E8FFED] hover:border-[#FFCF2A] hover:-translate-y-2 transition-all duration-300 ease-in-out'>
                     Have a Look
                </button>
            </div>
        </div>
    </div>
  )
}

export default VendorrAB