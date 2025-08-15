import React from 'react';
import { FaHeart, FaShareAlt, FaBookmark } from 'react-icons/fa'

const HoverShadowCard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
            <div className="w-64 h-96 p-6 bg-white rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:blur-md hover:border-2 hover:border-purple-500 hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 transition-all duration-300 ease-in-out hover:text-purple-600">
                    Card Title
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out hover:text-gray-800">
                    This is a refined card component with enhanced hover shadow, smoother animations, and richer interaction.
                </p>

                {/* Icon Section */}
                <div className="flex justify-between mt-6">
                    <FaHeart className="text-gray-500 hover:text-red-500 transition-all duration-300 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 hover:text-blue-500 transition-all duration-300 cursor-pointer" />
                    <FaBookmark className="text-gray-500 hover:text-yellow-500 transition-all duration-300 cursor-pointer" />
                </div>

                {/* Button Section */}
                <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-full shadow-md transition-transform duration-300 transform hover:scale-110 hover:bg-purple-600">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default HoverShadowCard