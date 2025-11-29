import React, { useState } from 'react';

const FocusInputSlide = () => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    return (
        <div className="relative w-80 mx-auto mt-10">
            {/* Expanding Gradient Background */}
            <div
                className={`absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out transform ${isFocused ? 'scale-x-100' : 'scale-x-0'} origin-left rounded-lg shadow-lg`}
            />

            {/* Input Field */}
            <input
                type="text"
                placeholder="Enter something..."
                className={`w-full py-4 px-5 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-all duration-300 ease-in-out shadow-md ${isFocused ? 'shadow-xl' : 'shadow-sm'}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default FocusInputSlide