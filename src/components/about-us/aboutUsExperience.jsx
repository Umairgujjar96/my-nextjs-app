import React from 'react'

const AboutUsExperience = () => {
  return (
    <div className='flex xs:flex-col mt-12 md:flex-row '>

        <div className='basis-[50%] relative text-center px-10 xs:my-12 md:my-0 md:mt-20 flex flex-col'>
            <h5 className='text-lg font-semibold'>Our Story</h5>
            <h2 className='xs:text-2xl md:text-4xl mt-5 text-[#00422F] font-serif font-bold'>The Wholesome</h2>
            <h1 className='xs:text-2xl md:text-4xl mb-5 text-[#00743C] font-bold font-serif'>WholeSale Experience</h1>
            <p>Our name like us, is derived from our roots serving as a reminder for us that no matter how the world changes, our origins empower us</p>
            <p className='font-semibold px-2'>Thok – wholesale, Mandi – market, does exactly that, encapsulating our meaning, while Punjabi connects us to our origins.</p>
            <img className='absolute -top-28' src='/aboutUs/Orchid-Core-img.png'></img>
        </div>
        <div className='basis-[50%]'>
            <img className=' xs:rounded-t-3xl md:rounded-t-none md:rounded-s-3xl' src='/aboutUs/1stImage.png'></img>
        </div>

    </div>
  )
}

export default AboutUsExperience