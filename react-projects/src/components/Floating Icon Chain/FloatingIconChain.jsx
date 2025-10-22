import React from 'react';
import IconChain from './IconChain'
import './FloatingIconChain.css'

const FloatingIconChain = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white text-center space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          Explore Our Features
        </h1>
        <p className="text-lg md:text-xl max-w-lg">
          Scroll down to see our key features presented dynamically with floating icons!
        </p>
      </div>

      {/* Icon Chain */}
      <IconChain />

      {/* Call to Action Section */}
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <a
          href="#"
          className="px-6 py-3 text-xl font-semibold bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default FloatingIconChain