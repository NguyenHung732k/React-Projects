import React from 'react'
import './HoverAnimation.css'

const HoverAnimation = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 px-6">
            <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-xl">

                <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full transform transition-all duration-300 ease-in-out hover:scale-110 hover:animate-rubber-band hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Rubber Band Button
                </button>

                <p className="text-2xl font-semibold text-gray-100 text-center hover:animate-bounce">
                    Hover over me, and I will bounce! I'm a playful text!
                </p>

                <div className="text-5xl text-gray-100 hover:animate-spin hover:text-red-500 transition duration-300 ease-in-out cursor-pointer">
                    <i className="fas fa-sync-alt"></i>
                </div>

                <div className="text-5xl text-gray-100 transform transition-all duration-300 ease-in-out hover:scale-125 hover:text-yellow-500 cursor-pointer">
                    <i className="fas fa-star"></i>
                </div>

                <div className="flex justify-center items-center mt-10 space-x-6">
                    <p className="text-lg text-white font-medium transform transition-all duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 cursor-pointer">
                        Explore More
                    </p>
                    <p className="text-lg text-white font-medium transform transition-all duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 cursor-pointer">
                        Have Fun!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HoverAnimation