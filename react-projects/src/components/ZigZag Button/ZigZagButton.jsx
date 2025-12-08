import React from "react";
import './ZigZagButton.css'

const ZigzagButton = () => {
    return (
        <button
            className="
        relative group
        w-80 px-6 py-3 md:px-8 md:py-4
        font-bold text-white
        bg-gradient-to-r from-blue-500 to-indigo-600
        rounded-full shadow-md
        overflow-hidden
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-indigo-300
      "
            aria-label="Playful zigzag underline button"
        >
            {/* Button Text */}
            <span className="relative z-10">Hover Me!</span>

            {/* Zigzag Underline SVG */}
            <svg
                className="
          absolute bottom-1 left-0 w-full h-6
          transition-all duration-500 ease-out
          pointer-events-none
        "
                viewBox="0 0 200 40"
                fill="none"
                stroke="white"
                strokeWidth="3"
            >
                <path
                    className="zigzag-path"
                    d="M5 30 L25 10 L45 30 L65 10 L85 30 L105 10 L125 30 L145 10 L165 30 L185 10"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                />
            </svg>
        </button>
    )
}

export default ZigzagButton