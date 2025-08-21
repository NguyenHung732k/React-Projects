import React, { useState, useRef } from 'react';

const SHAPES = {
    circle: "M50,50 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0",
    star: "M50,5 L61,35 H95 L67,57 L78,91 L50,70 L22,91 L33,57 L5,35 H39 Z",
}

const RippleClickEffect = ({
    shape = "circle",             // 'circle' | 'star' | 'custom'
    customShape = "",             // SVG path string for 'custom' shape
    fill = "gradient",            // 'gradient' | 'image' | CSS color
    imageUrl = "",                // for fill='image'
    size = 140,                   // size of ripple
    speed = 700,                  // animation duration (ms)
    className = "",               // Tailwind or custom styling
}) => {
    const [ripples, setRipples] = useState([])
    const containerRef = useRef(null)

    const handleClick = (event) => {
        const rect = containerRef.current.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const id = Date.now()

        setRipples((prev) => [...prev, { id, x, y }])

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id))
        }, speed)
    };

    const getFill = () => {
        if (fill === "gradient") return "url(#rippleGradient)"
        if (fill === "image" && imageUrl) return "url(#rippleImage)"
        return fill
    }

    const pathData = shape === "custom" ? customShape : SHAPES[shape] || SHAPES.circle

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden cursor-pointer ${className}`}
            onClick={handleClick}
        >
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    {/* Gradient Fill */}
                    <radialGradient id="rippleGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </radialGradient>

                    {/* Image Fill */}
                    {fill === "image" && imageUrl && (
                        <pattern id="rippleImage" patternUnits="objectBoundingBox" width="1" height="1">
                            <image
                                href={imageUrl}
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                preserveAspectRatio="xMidYMid slice"
                            />
                        </pattern>
                    )}
                </defs>

                {ripples.map(({ id, x, y }) => (
                    <path
                        key={id}
                        d={pathData}
                        transform={`translate(${x - size / 2}, ${y - size / 2}) scale(${size / 100})`}
                        fill={getFill()}
                        style={{
                            animation: `rippleEffect ${speed}ms ease-out forwards`,
                            opacity: 0.75,
                            filter: 'blur(1px)',
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export default RippleClickEffect