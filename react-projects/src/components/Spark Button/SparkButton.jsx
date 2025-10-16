import React, { useState } from 'react';
import './SparkButton.css'

const SparkButton = ({ text="Premium Button", speed = '2s' }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative w-60 px-8 py-4 rounded-lg text-white font-semibold
        bg-gradient-to-r from-blue-500 to-teal-400 border-2 border-transparent
        group transition-all ease-in-out duration-300 
        transform hover:scale-105 hover:shadow-xl`}
                style={{
                    animation: isHovered ? `spark-animation ${speed} infinite` : 'none',
                }}
            >
                <span className="relative z-10 transition-all duration-300 group-hover:text-black">{text}</span>

                <div
                    className={`absolute inset-0 border-2 border-transparent
          group-hover:border-blue-300
          transition-all duration-300 ease-in-out`}
                />

                {/* Spark Animation */}
                <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent bg-transparent z-0">
                    {isHovered && (
                        <div className="absolute inset-0 border border-transparent z-0 overflow-hidden">
                            <div className="spark-trail"></div>
                        </div>
                    )}
                </div>
            </button>
        </div>
    )
}

export default SparkButton