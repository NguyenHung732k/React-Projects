import React, { useRef, useEffect, useState } from 'react';

const ScrollImageReveal = ({ src = "https://source.unsplash.com/1200x800/?nature,water", height = 600 }) => {
    const containerRef = useRef(null)
    const [maskTranslate, setMaskTranslate] = useState(100)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const visibleStart = windowHeight - rect.top
            const totalVisible = rect.height + windowHeight
            const scrollProgress = Math.min(Math.max(visibleStart / totalVisible, 0), 1)

            const translateY = 100 - scrollProgress * 100
            setMaskTranslate(translateY)

            if (scrollProgress > 0.05) setIsVisible(true)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans">
            <header className="text-center py-20">
                <h1 className="text-5xl font-extrabold mb-4">Scroll Reveal Mask Effect</h1>
                <p className="text-lg text-gray-600">
                    Smoothly reveal images as you scroll
                </p>
            </header>

            <section className="h-[100vh] flex items-center justify-center">
                <p className="text-xl text-gray-500 animate-pulse">
                    Scroll down to uncover the image 👇
                </p>
            </section>

            <div
                ref={containerRef}
                className="relative overflow-hidden w-full max-w-4xl mx-auto shadow-xl rounded-xl"
                style={{ height: `${height}px` }}
            >
                {/* Image */}
                <img
                    src={src}
                    alt="Scroll Reveal"
                    className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Gradient Mask */}
                <div
                    className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{
                        background:
                            'linear-gradient(to bottom, white 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
                        transform: `translateY(${maskTranslate}%)`,
                    }}
                />
            </div>
            <section className="h-[80vh] flex items-center justify-center text-center px-6">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">
                        Elegant, responsive, scroll-based UI
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Use this effect to enhance hero sections, case studies, or storytelling experiences. Built with React + Tailwind CSS.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default ScrollImageReveal