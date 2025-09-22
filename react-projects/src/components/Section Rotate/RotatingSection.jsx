import React, { useState, useEffect, useRef } from 'react';

const RotatingSection = ({ children, className, tiltDirection = 'rotate-x' }) => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const animationClass = isVisible
        ? tiltDirection === 'rotate-x' ? 'rotate-x fade-in' : 'rotate-y fade-in'
        : 'opacity-0'

    return (
        <div
            ref={sectionRef}
            className={`transform transition-all duration-1000 ease-out ${animationClass} ${className}`}
        >
            {children}
        </div>
    )
}

export default RotatingSection