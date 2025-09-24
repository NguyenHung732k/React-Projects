import React, { useState } from 'react';
import './FlipBounceIcon.css'

const FlipBounceIcon = () => {
    const [hovered, setHovered] = useState(false)

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <button
                aria-label="Rocket Icon Flip"
                className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-xl shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 ease-in-out perspective"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div
                    className={`w-full h-full flex items-center justify-center transform transition-transform duration-300 ease-in-out 
            ${hovered ? 'animate-flip-bounce' : 'rotate-y-0'}
          `}
                >
                    <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M192 384L88.5 384C63.6 384 48.3 356.9 61.1 335.5L114 247.3C122.7 232.8 138.3 224 155.2 224L250.2 224C326.3 95.1 439.8 88.6 515.7 99.7C528.5 101.6 538.5 111.6 540.3 124.3C551.4 200.2 544.9 313.7 416 389.8L416 484.8C416 501.7 407.2 517.3 392.7 526L304.5 578.9C283.2 591.7 256 576.3 256 551.5L256 448C256 412.7 227.3 384 192 384L191.9 384zM464 224C464 197.5 442.5 176 416 176C389.5 176 368 197.5 368 224C368 250.5 389.5 272 416 272C442.5 272 464 250.5 464 224z" />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default FlipBounceIcon