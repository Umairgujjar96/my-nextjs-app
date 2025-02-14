"use client"
import React, { useState } from 'react'

const SendMessageForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Validate and handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
    
        // Simple validation
        Object.keys(formData).forEach((key) => {
          if (!formData[key].trim()) {
            newErrors[key] = `${key} is required`;
          }
        });
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        // Handle form submission (e.g., send data to backend)
        console.log("Form Submitted:", formData);
    
        // Clear form after submission
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        setErrors({});
      };
    
  return (
    <form onSubmit={handleSubmit} className="flex p-8 flex-col gap-6">
    
      {/* First Name */}
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#007641]">First Name *</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder='First Name'
          className="border-2 placeholder:text-gray-300 border-gray-300 text-gray-400 font-semibold py-3 px-5 rounded-3xl"
        />
        {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-1">
        <label className="text-lg  text-[#007641]">Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="border-2 border-gray-300 text-gray-400 font-semibold py-3 px-5 rounded-3xl"
        />
        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
      </div>
    

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label className="text-lg text-[#007641]">Email *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border-2 border-gray-300 text-gray-400 font-semibold py-3 px-5 rounded-3xl"
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
    </div>

    {/* Subject */}
    <div className="flex flex-col gap-1">
      <label className="text-lg text-[#007641]">Subject *</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="border-2 border-gray-300 text-gray-400 font-semibold py-3 px-5 rounded-3xl"
      />
      {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
    </div>

    {/* Message */}
    <div className="flex flex-col gap-1">
      <label className="text-lg text-[#007641]">Message *</label>
      <textarea
        name="message"
        value={formData.message}
        rows={4}
        onChange={handleChange}
        className="border-2 border-gray-300 text-gray-400 font-semibold py-3 px-5 rounded-3xl"
      ></textarea>
      {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
    </div>

    {/* Submit Button */}
    <div className='flex justify-end'>
    <button
      type="submit"
      className="bg-[#FFCF2A] border-4 font-semibold border-[#FFCF2A] w-40 text-lg text-[#007641] py-2 rounded-3xl hover:bg-[white] transition hover:-translate-y-2 duration-300"
    >
      Send Message
    </button>
    </div>
  </form>
  )
}

export default SendMessageForm