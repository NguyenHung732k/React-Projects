import React, { useRef } from 'react';

const TiltButton = () => {
    const btnRef = useRef(null)

    const isTouchDevice = () =>
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0)

    const handleMouseMove = (event) => {
        if (isTouchDevice()) return

        const btn = btnRef.current
        const rect = btn.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        btn.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        btn.style.boxShadow = `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(0, 0, 0, 0.25)`
    }

    const handleMouseLeave = () => {
        const btn = btnRef.current
        btn.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)'
        btn.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)'
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
            <button
                ref={btnRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-80 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold shadow-lg border border-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                }}
            >
                Hover Me
            </button>
        </div>
    )
}

export default TiltButton