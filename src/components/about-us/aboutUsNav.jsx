import React from 'react'

const AboutUsNav = () => {
  return (
    <div className='flex md:relative xs:flex-col md:flex-row xs:my-2 md:my-4 justify-between'>
        <div className='xs:text-center md:ml-12 my-3'>
            <h5 className='text-lg font-semibold cursor-pointer underline hover:no-underline text-[#00422F]'>Visit Marketplace</h5>
        </div>
        <div className='flex justify-center md:absolute my-3 inset-x-0 top-0'>
            <img className='xs:h-12 xs:w-72 md:h-10 md:w-60' src='/home/Thokmandee-Logo.png' alt="Thokmandee Logo" />
        </div>
    </div>
  )
}

export default AboutUsNav;
