"use client"
import React, { useState } from 'react';

const RegisterToBuyForm = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the Privacy Policy and Terms of Use.");
      return;
    }
    console.log("Registered with:", email);
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Email Input */}
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Business email address"
        className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Checkbox Agreement */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="h-4 w-4 accent-green-600 cursor-pointer"
        />
        <label htmlFor="agree">
          By signing up, you agree to our{" "}
          <a href="/privacy-policy" className="text-green-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-use" className="text-green-600 underline">
            Terms of Use
          </a>.
        </label>
      </div>

      {/* Signup Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-2 text-white font-semibold bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Signup for free
      </button>

      {/* Login Redirect */}
      <h3 className="text-center text-gray-700 text-sm">
        Already have an account?{" "}
        <a href="/login" className="text-green-600 font-semibold underline">
          Login Now
        </a>
      </h3>
    </div>
  );
};

export default RegisterToBuyForm;
