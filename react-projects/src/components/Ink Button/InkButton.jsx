import React, { useRef, useState } from 'react';

const InkButton = () => {
    const buttonRef = useRef(null)
    const [inkStyle, setInkStyle] = useState({})
    const [animating, setAnimating] = useState(false)

    const handleMouseEnter = (event) => {
        const rect = buttonRef.current.getBoundingClientRect()
        const size = rect.width * 2
        const x = event.clientX - rect.left - size / 2
        const y = event.clientY - rect.top - size / 2

        setInkStyle({
            top: y,
            left: x,
            width: size,
            height: size,
            opacity: 1,
            transform: 'scale(1)',
        })

        setAnimating(true)
    }

    const handleMouseLeave = () => {
        setInkStyle((prev) => ({
            ...prev,
            opacity: 0,
            transform: 'scale(0.6)',
        }))

        setTimeout(() => setAnimating(false), 500)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-white dark:bg-black transition-colors duration-500">
            <button
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-60 group relative overflow-hidden px-6 py-3 rounded-lg font-semibold text-neutral-100 dark:text-white bg-gradient-to-br from-neutral-800 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            >
                {animating && (
                    <span
                        className="absolute pointer-events-none rounded-full bg-black/20 dark:bg-white/15 blur-sm transition-all duration-500 ease-out"
                        style={{
                            ...inkStyle,
                            position: 'absolute',
                        }}
                    />
                )}
                <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                    Hover Me
                </span>
            </button>
        </div>
    )
}

export default InkButton