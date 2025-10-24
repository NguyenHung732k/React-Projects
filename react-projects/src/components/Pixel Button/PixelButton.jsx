import React from 'react';
import './PixelButton.css'

const PixelButton = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <button className="relative w-80 px-8 py-4 bg-blue-500 text-white font-semibold text-lg overflow-hidden group rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                {/* Pixelation effect (CSS grid) */}
                <span className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1">
                    {[...Array(100)].map((_, index) => (
                        <span
                            key={index}
                            className="block bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                                animation: `pixel-fade ${Math.random() * 0.5 + 0.3}s ease-out forwards`,
                                animationDelay: `${(Math.random() * 0.5 + 0.1) * index}s`,
                            }}
                        ></span>
                    ))}
                </span>
                {/* Button Text */}
                <span className="relative z-10 group-hover:text-blue-200 transition-colors duration-300">
                    Pixelated Button
                </span>
            </button>
        </div>
    )
}

export default PixelButton