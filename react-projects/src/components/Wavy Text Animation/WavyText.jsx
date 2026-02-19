import React, { useState } from 'react'

const WavyText = ({
    text,
    waveSpeed = '0.9s',
    waveHeight = '0.5em',
    autoWave = false,
    className = '',
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isAutoWave, setIsAutoWave] = useState(autoWave)
    const letters = text.split('')

    const handleMouseEnter = () => {
        if (!isAutoWave) setIsHovered(true)
    }

    const handleMouseLeave = () => {
        if (!isAutoWave) setIsHovered(false)
    }

    const toggleAutoWave = () => {
        setIsAutoWave((prevState) => !prevState)
    }

    return (
        <div
            className={`inline-block cursor-pointer transition-transform duration-300 ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="flex justify-center items-center mb-4"
                onClick={toggleAutoWave}
            >
                <button className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg focus:outline-none hover:bg-indigo-600">
                    Auto-Wave {isAutoWave ? 'Off' : 'On'}
                </button>
            </div>
            {letters.map((char, index) => (
                <span
                    key={index}
                    className="inline-block wavy-letter"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                        animationDuration: waveSpeed,
                        animationName: isHovered || isAutoWave ? 'wave' : 'none',
                        transformOrigin: 'bottom center',
                        '--wave-height': waveHeight,
                    }}
                >
                    {char}
                </span>
            ))}
        </div>
    )
}

export default WavyText