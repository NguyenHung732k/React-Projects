import React, { useEffect, useRef, useState } from 'react'

const ScrollTextReveal = () => {
    const containerRef = useRef(null)
    const [reveal, setReveal] = useState(0)

    const handleScroll = () => {
        const container = containerRef.current
        if (!container) return

        const rect = container.getBoundingClientRect()
        const windowHeight = window.innerHeight

        const progress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight))
        setReveal(progress)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden flex items-center justify-center"
        >
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

            <h1 className="text-[clamp(3rem,10vw,8rem)] font-extrabold tracking-tight text-center px-6 relative z-10">
                <span
                    style={{
                        maskImage: `linear-gradient(to right, black ${reveal * 100}%, transparent ${reveal * 100}%)`,
                        WebkitMaskImage: `linear-gradient(to right, black ${reveal * 100}%, transparent ${reveal * 100}%)`,
                        transition: 'mask-image 0.25s ease-out',
                        display: 'inline-block',
                    }}
                    className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
                >
                    Empower Your Vision
                </span>
            </h1>

            <div className="absolute bottom-8 w-full flex justify-center z-20 animate-bounce">
                <span className="text-white/60 text-xl">↓</span>
            </div>
        </section>
    )
}

export default ScrollTextReveal