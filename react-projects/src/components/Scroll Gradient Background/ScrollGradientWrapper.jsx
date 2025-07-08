import React from 'react';
import { useSectionObserver } from './useSectionObserver'

const gradientMap = {
    hero: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    about: 'linear-gradient(to right, #6a11cb, #2575fc)',
    contact: 'linear-gradient(to right, #43cea2, #185a9d)',
}

const ScrollGradientWrapper = ({ children }) => {
    const currentSection = useSectionObserver(['hero', 'about', 'contact'])
    const currentGradient = gradientMap[currentSection] || gradientMap.hero

    return (
        <div
            className="min-h-screen transition-all duration-700 ease-in-out"
            style={{
                backgroundImage: currentGradient,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.7s ease-in-out',
            }}
        >
            {children}
        </div>
    )
}

export default ScrollGradientWrapper