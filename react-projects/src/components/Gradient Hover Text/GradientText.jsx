import React from 'react';

const GradientText = ({ children, className = '' }) => {
    return (
        <span
            className={`relative inline-block cursor-pointer
        text-gray-700 dark:text-gray-300
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
        bg-clip-text text-transparent
        transition duration-300 ease-in-out
        hover:text-transparent hover:bg-clip-text
        hover:scale-105
        ${className}`}
        >
            {children}

            {/* Gradient underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 
          bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
          transition-all duration-300 ease-in-out
          hover:w-full"
            />
        </span>
    )
}

export default GradientText