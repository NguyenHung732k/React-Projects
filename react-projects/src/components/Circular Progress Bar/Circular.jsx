import React, { useState, useEffect } from 'react'

const Circular = ({
    progress = 0,
    size = 100,
    strokeWidth = 10,
    color = 'bg-blue-500',
    label = true,
    icon = null,
    animationDuration = 1.5,
    bgColor = 'bg-gray-200',
    showTooltip = false,
    shadow = true,
    gradient = false,
}) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        if (progressValue < progress) {
            setProgressValue(progress)
        }
    }, [progress])

    return (
        <div className="flex justify-center items-center relative group">
            <svg
                width={size}
                height={size}
                className="transform rotate-90"
                aria-label="Progress Indicator"
            >
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={bgColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                />
                {gradient && (
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className="stop-opacity-100" stopColor="#4ade80" />
                            <stop offset="100%" className="stop-opacity-100" stopColor="#22c55e" />
                        </linearGradient>
                    </defs>
                )}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={gradient ? 'url(#gradient1)' : color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                        transition: `stroke-dashoffset ${animationDuration}s ease-out, stroke ${animationDuration}s ease-out`,
                        filter: shadow ? 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))' : 'none',
                    }}
                />
            </svg>

            {label && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center">
                    {icon && (
                        <div className="absolute text-xl text-white">
                            {icon}
                        </div>
                    )}
                    <span className="font-bold text-lg">{progressValue}%</span>
                </div>
            )}

            {showTooltip && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-xs text-gray-700 group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black text-white px-2 py-1 rounded-md">
                        {progressValue}% Complete
                    </div>
                </div>
            )}
        </div>
    )
}

export default Circular