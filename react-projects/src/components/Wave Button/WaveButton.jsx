import React, { useState } from "react";

const WaveButton = ({
    children = "Hover Me",
    waveFrequency = 3,
    waveAmplitude = 6,
    waveSpeed = 2,
    disabled = false,
    className = "",
}) => {
    const [hovered, setHovered] = useState(false)

    const path = Array.from({ length: 100 }, (_, i) => {
        const x = (i / 99) * 100
        const y = 50 + waveAmplitude * Math.sin((x / 100) * waveFrequency * 2 * Math.PI)
        return `${i === 0 ? "M" : "L"} ${x},${y}`
    }).join(" ")

    return (
        <button
            disabled={disabled}
            className={`relative w-80 px-6 py-3 text-white font-semibold bg-indigo-600 rounded-md overflow-hidden transition-all ease-in-out duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'scale-105 shadow-lg'}
        ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="relative z-10">{children}</span>

            <svg
                className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"
                    }`}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <mask id="waveMask">
                        <rect width="100%" height="100%" fill="white" />
                        <path
                            d={path}
                            stroke="black"
                            strokeWidth="4"
                            fill="transparent"
                            style={{
                                animation: hovered
                                    ? `waveMotion ${waveSpeed}s linear infinite`
                                    : "none",
                            }}
                        />
                    </mask>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    mask="url(#waveMask)"
                />
            </svg>

            <style>{`
        @keyframes waveMotion {
          0% { transform: translateX(0); }
          100% { transform: translateX(-10%); }
        }
      `}</style>
        </button>
    )
}

export default WaveButton