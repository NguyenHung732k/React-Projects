import React, { useState } from 'react';

const JumpCounter = () => {
    const [count, setCount] = useState(0)
    const [jumping, setJumping] = useState(false)

    const increment = () => {
        setJumping(true)
        setCount(count + 1)
        setTimeout(() => setJumping(false), 300)
    }

    const decrement = () => {
        setJumping(true)
        setCount(count - 1)
        setTimeout(() => setJumping(false), 300)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
            <div className="text-center p-8 rounded-lg bg-white shadow-lg max-w-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Counter</h2>
                <div
                    className={`text-5xl font-extrabold transition-all duration-300 ease-out ${jumping
                        ? "transform scale-110 translate-y-[-15px] text-indigo-500"
                        : "text-gray-700"
                        }`}
                >
                    {count}
                </div>
                <div className="flex mt-6 space-x-6 justify-center">
                    <button
                        onClick={decrement}
                        className="bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform"
                    >
                        -
                    </button>
                    <button
                        onClick={increment}
                        className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JumpCounter