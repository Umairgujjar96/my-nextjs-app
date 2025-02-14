"use client"
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const RegisterToSellForm = () => {
  // Form state variables
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    shopName: '',
    shopUrl: '',
    street: '',
    street2: '',
    city: '',
    zipcode: '',
    country: '',
    state: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 left-0 text-start gap-4">
          {/* First Name and Last Name in the same row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-base text-left text-white">
                First Name <span className="text-white">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 text-sm text-gray-600 placeholder:text-sm p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-base text-left text-white">
                Last Name <span className="text-white">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 text-sm text-gray-600 placeholder:text-sm p-2 border rounded-md w-full"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-base text-left text-white">
              Email Address <span className="text-white">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border text-sm text-gray-600 placeholder:text-sm rounded-md w-full"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-base text-left text-white">
              Phone Number <span className="text-white">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 border text-sm text-gray-600 placeholder:text-sm rounded-md w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-base text-left text-white">
              Password <span className="text-white">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 text-sm text-gray-600 placeholder:text-sm p-2 border rounded-md w-full"
            />
          </div>

          {/* Shop Name */}
          <div>
            <label htmlFor="shop-name" className="block text-base text-left text-white">
              Shop Name <span className="text-white">*</span>
            </label>
            <input
              type="text"
              id="shop-name"
              name="shopName"
              placeholder="Shop Name"
              required
              value={formData.shopName}
              onChange={handleChange}
              className="mt-1 p-2 text-sm text-gray-600 placeholder:text-sm border rounded-md w-full"
            />
          </div>

          {/* Shop URL */}
          <div>
            <label htmlFor="shop-url" className="block text-base text-left text-white">
              Shop URL <span className="text-white">*</span>
            </label>
            <input
              type="url"
              id="shop-url"
              name="shopUrl"
              placeholder="https://staging.thokmandee.com/Vendor/"
              required
              value={formData.shopUrl}
              onChange={handleChange}
              className="mt-1 p-2 text-sm text-gray-600 placeholder:text-sm border rounded-md w-full"
            />
          </div>

          {/* Street and Street 2 */}
          <div>
            <label htmlFor="street" className="block text-base text-left text-white">
              Street <span className="text-white">*</span>
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Street Address"
              required
              value={formData.street}
              onChange={handleChange}
              className="mt-1 p-2 border text-sm text-gray-600 placeholder:text-sm rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="street2" className="block text-base text-left text-white">
              Street 2 (Optional)
            </label>
            <input
              type="text"
              id="street2"
              name="street2"
              placeholder="Apartment, suite, unit etc, (optional)"
              value={formData.street2}
              onChange={handleChange}
              className="mt-1 p-2 text-sm text-gray-600 placeholder:text-sm border rounded-md w-full"
            />
          </div>

          {/* City and ZIP Code in the same row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-base text-left text-white">
                City <span className="text-white">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Town/City"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 border text-sm text-gray-600 placeholder:text-sm rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="zipcode" className="block text-base text-left text-white">
                ZIP Code <span className="text-white">*</span>
              </label>
              <input
                type="text"
                id="zipcode"
                placeholder="Postcode / ZIP"
                name="zipcode"
                required
                value={formData.zipcode}
                onChange={handleChange}
                className="mt-1 p-2 border text-sm text-gray-600 placeholder:text-sm rounded-md w-full"
              />
            </div>
          </div>

          {/* Country and State */}
          <div>
            <label htmlFor="country" className="block text-base text-left text-white">
              Country <span className="text-white">*</span>
            </label>
            <input
              type="text"
              placeholder="-Select a location"
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 border text-sm text-gray-600 placeholder:text-sm rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-base text-left text-white">
              State <span className="text-white">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="mt-1 text-sm text-gray-600 placeholder:text-sm p-2 border rounded-md w-full"
            />
          </div>

          {/* reCAPTCHA */}
          <div className="mt-4">
            <div className="flex">
              <div className="border p-4 rounded-md bg-gray-100 text-center">
                <p className="text-base">reCAPTCHA (Placeholder)</p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex mt-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm text-white">
              I have read and agree to the <a href="#" className="text-[#00422F]">Terms and Conditions</a>.
            </label>
          </div>

          {/* Register Button */}
          <div className="left-1">
            <button
              type="submit"
              className="px-6 py-3 bg-[#FF6E49] text-[#00422F] hover:text-yellow-300 hover:bg-[#FF5A3E] duration-500 ease-in-out rounded-3xl text-xl font-semibold shadow-md transform"
            >
              Register
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-2 flex space-x-2">
            <div className="p-3 bg-yellow-400 rounded-full cursor-pointer">
              <FaGoogle className="text-white text-3xl" />
            </div>
            <div className="p-3 bg-yellow-400 rounded-full cursor-pointer">
              <FaFacebook className="text-white text-3xl" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterToSellForm;
