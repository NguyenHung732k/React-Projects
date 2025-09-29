import React, { useState, useEffect } from 'react';

const ScrollProgressTextFill = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = (scrollPosition / documentHeight) * 100
        setScrollPercentage(scrollPercentage)
    }

    const textFillStyle = {
        background: `linear-gradient(90deg, #4f46e5 ${scrollPercentage}%, #d1d5db ${scrollPercentage}%)`,
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        transition: 'background 0.2s ease-out, transform 0.2s ease-out',
        transform: `scale(${1 + scrollPercentage / 200})`,
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    };

    const handleHover = (event) => {
        event.target.style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="relative h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
            <h1
                className="text-6xl font-bold cursor-pointer"
                style={textFillStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                Scroll to Reveal Me!
            </h1>

            <div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"
                style={{ width: `${scrollPercentage}%` }}
            ></div>
        </div>
    )
}

export default ScrollProgressTextFill