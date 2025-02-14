"use client"
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Logged In")
      console.log({ email, password });
    };
  
  return (
    <form onSubmit={handleSubmit} className="pt-7 space-y-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 text-lg xs:py-2 md:py-3 border-2 border-black rounded-full xs:placeholder:text-base md:placeholder:text-lg"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 text-lg xs:py-2 md:py-3 border-2 border-black rounded-full xs:placeholder:text-base placeholder:text-lg "
            />
            <button type="submit" className="w-full xs:py-2 xs:text-lg md:py-3 bg-[#00422F] text-white rounded-full md:text-xl font-semibold hover:bg-black">
              Login
            </button>
          </form>
  )
}

export default LoginForm