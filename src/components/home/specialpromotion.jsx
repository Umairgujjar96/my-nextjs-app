import React from 'react';

const SpecialPromotion = () => {
  const products = [
    {
      icon: '/home/promo1.png',
      title: 'Chick Peas',
      discount: '22.45%',
      price: '2.45',
      discountedPrice: '1.90',
    },
    {
      icon: '/home/promo2.png',
      title: 'Lentils Red Split',
      discount: '22.45%',
      price: '1.89',
      discountedPrice: '1.50',
    },
    {
      icon: '/home/promo3.png',
      title: 'Chana Dal',
      discount: '22.45%',
      price: '1.90',
      discountedPrice: '1.50',
    },
    {
      icon: '/home/promo4.png',
      title: 'Red Kidney Beans',
      discount: '22.45%',
      price: '2.99',
      discountedPrice: '2.50',
    },
  ];

  return (
    <div className="bg-[#E8FFED] w-full px-6 sm:px-8 py-10">
        <div className='items-center flex flex-col mb-10'>
            <h1 className='text-3xl font-semibold'>Special Promotion Offer</h1>
            <p className='text-xl my-4 text-gray-700'>Get the Best Deals at ThokMandi</p>
        </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img className="w-[90%] lg:w-full max-w-sm h-[500px] object-contain" src="/home/global.png" alt="Promotion" />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {products.map((product, i) => (
              <div
                key={i}
                className="flex bg-white px-6 py-8 gap-6 rounded-xl shadow-lg flex-col sm:flex-row items-center justify-between"
              >
                <img
                  className="h-44 w-32 object-cover rounded-md"
                  src={product.icon}
                  alt={product.title}
                />
                <div className="flex flex-col px-1 justify-between text-center sm:text-left">
                  <h3 className="text-2xl text-center  mb-4 text-[#00743C] font-semibold">{product.title}</h3>
                  <div className="flex flex-col  bg-[#FFE9A1] rounded-2xl p-4 mt-4 sm:mt-0 hover:-translate-y-2 duration-300">
                    <div className="flex flex-col items-center mx-auto sm:items-start">
                      {/* Original Price with line cut */}
                      <h1 className="text-2xl sm:text-3xl mx-auto text-[#00743C] font-bold line-through">{product.price}</h1>
                      <p className="text-xs text-center text-[#00743C] sm:text-left">Discounted Price</p>
                      {/* Discounted Price */}
                      <h1 className="text-3xl sm:text-4xl mx-auto text-[#00743C] font-bold">{product.discountedPrice}</h1>
                    </div>
                    <p className="text-xs mx-auto text-[#00743C] mt-2">per 1 kg bag / 1 kg box</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='xs:text-center lg:text-right '>
      <p className='m-4 font-semibold'>*Terms & conditions apply. Minimum order 1 palette. Single product or mixed product.</p>
    
      </div>
    </div>
  );
};

export default SpecialPromotion;
