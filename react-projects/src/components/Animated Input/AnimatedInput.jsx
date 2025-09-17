import React, { useState } from 'react';
import './AnimatedInput.css'

const AnimatedInput = () => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="w-full max-w-md">
                <label htmlFor="fancy-input" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Your Name
                </label>
                <div className="relative">
                    <input
                        id="fancy-input"
                        type="text"
                        placeholder="e.g. Jane Doe"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={`w-full px-5 py-3 text-base rounded-lg outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md transition-all duration-300
              ${isFocused ? 'border-transparent' : 'border-gray-400 dark:border-gray-600'}
              border-2`}
                    />
                    {isFocused && (
                        <div className="absolute inset-0 rounded-lg pointer-events-none animate-gradient-border-mask z-10" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default AnimatedInput