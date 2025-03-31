import React, { useState } from 'react'
import Cursor from './Cursor'
import './Cursor.css'


const HoverCursor = () => {
    const [cursorType, setCursorType] = useState('default')

    return (
        <div className="relative w-screen h-screen flex flex-col gap-4 justify-center items-center bg-gray-900 text-white overflow-hidden">
            <Cursor cursorType={cursorType} />

            {/* Button */}
            <div className="absolute top-40 left-10">
                <button
                    onMouseEnter={() => setCursorType('button')}
                    onMouseLeave={() => setCursorType('default')}
                    className="p-4 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl duration-200"
                >
                    Hover me!
                </button>
            </div>

            {/* Link */}
            <div className="absolute top-60 left-10">
                <a
                    href="/"
                    onMouseEnter={() => setCursorType('link')}
                    onMouseLeave={() => setCursorType('default')}
                    className="text-xl text-white hover:text-pink-400 transition-colors"
                >
                    Hover over this link
                </a>
            </div>

            {/* Ripple Effect */}
            <div className="absolute top-80 left-10">
                <div
                    onMouseEnter={() => setCursorType('ripple')}  
                    onMouseLeave={() => setCursorType('default')}
                    className="w-48 h-48 bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 rounded-full"
                ></div>
            </div>
        </div>
    )
}

export default HoverCursor