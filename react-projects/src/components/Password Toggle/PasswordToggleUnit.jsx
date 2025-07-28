import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


const PasswordToggleUnit = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <div className="relative">
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder="Enter your password"
        className="pl-10 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
      />

      <div
        onClick={toggleVisibility}
        className={`eye-icon ${isVisible ? 'open' : 'closed'}`}
      >
        {isVisible ? (
          <AiFillEyeInvisible className="text-gray-500 hover:text-blue-600 text-2xl" />
        ) : (
          <AiFillEye className="text-gray-500 hover:text-blue-600 text-2xl" />
        )}
      </div>

      <div className="tooltip">
        <span>Click the eye to reveal or hide your password.</span>
      </div>
    </div>
  )
}

export default PasswordToggleUnit