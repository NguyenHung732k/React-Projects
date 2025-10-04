import React, { useEffect, useState } from 'react';

const FlipDigit = ({ digit, animate }) => {
    const [currentDigit, setCurrentDigit] = useState(0)

    useEffect(() => {
        if (animate) {
            setTimeout(() => setCurrentDigit(digit), Math.random() * 300)
        }
    }, [animate, digit])

    return (
        <div className="relative h-16 w-10 perspective overflow-hidden">
            <div
                className="transition-transform duration-700 ease-out transform-style-preserve-3d"
                style={{
                    transform: `rotateX(${animate ? -currentDigit * 36 : 0}deg)`,
                }}
            >
                {[...Array(10)].map((d) => (
                    <div
                        key={d}
                        className="h-16 flex items-center justify-center text-3xl font-extrabold text-white bg-slate-800 rounded-md shadow-md"
                        style={{
                            transform: `rotateX(${d * 36}deg) translateZ(35px)`,
                            backfaceVisibility: 'hidden',
                            position: 'absolute',
                            width: '100%',
                        }}
                    >
                        {d}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FlipDigit