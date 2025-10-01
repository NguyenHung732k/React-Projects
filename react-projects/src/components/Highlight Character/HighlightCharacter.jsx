import React, { useState } from 'react';
import './HighlightCharacter.css'

const HighlightCharacter = () => {
    const [inputValue, setInputValue] = useState('')
    const [highlightedIndices, setHighlightedIndices] = useState([])

    const handleChange = (event) => {
        const value = event.target.value
        const newCharIndex = value.length - 1

        setInputValue(value)
        setHighlightedIndices((prev) => [...prev, newCharIndex])

        setTimeout(() => {
            setHighlightedIndices((prev) => prev.filter((i) => i !== newCharIndex))
        }, 300) // Flash duration
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-xl shadow-md">
                {/* Floating Label Input */}
                <div className="relative mb-6">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type something..."
                        className="peer w-full border-b-2 border-gray-300 text-gray-800 placeholder-transparent focus:outline-none focus:border-pink-500 text-lg py-2"
                    />
                    <label className="absolute left-0 -top-4 text-sm text-pink-500 transition-all 
          peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 
          peer-focus:-top-4 
          peer-focus:text-sm 
          peer-focus:text-pink-500">
                        Type something...
                    </label>
                </div>

                {/* Character-by-character flash display */}
                <div className="flex flex-wrap gap-1 text-lg font-mono min-h-[2.5rem]">
                    {inputValue.split('').map((char, index) => (
                        <span
                            key={index}
                            className={`transition-all duration-300 px-1.5 py-0.5 rounded-md 
              ${highlightedIndices.includes(index)
                                    ? 'bg-pink-300 text-black animate-flash'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            {char}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HighlightCharacter