import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'

const AnimatedLineInput = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState('')

    const isValid = value.trim().length > 0

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="relative w-full max-w-md mx-auto mt-12">
                {/* Label */}
                <label
                    htmlFor="animated-input"
                    className="block text-gray-700 text-base font-medium mb-1"
                >
                    Enter Text
                </label>

                {/* Input */}
                <div className="relative">
                    <input
                        id="animated-input"
                        type="text"
                        value={value}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder="Type something..."
                        className="w-full px-5 py-3 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-0 bg-white text-gray-800 placeholder-gray-400 transition-all duration-200"
                    />

                    {/* Animated Line */}
                    <span
                        className={`absolute left-1/2 bottom-0 transform -translate-x-1/2 h-1 rounded-full transition-all duration-500 ease-in-out
            ${isFocused ? 'w-4/5 bg-blue-600' : 'w-0 bg-transparent'}`}
                    />

                    {/* Validation Icon */}
                    {isValid && isFocused && (
                        <FaCheck className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnimatedLineInput