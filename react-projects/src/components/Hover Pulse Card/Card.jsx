import React, { useEffect, useRef, useState } from 'react';

const Card = ({ children, withGlow = false, className = '' }) => {
    const ref = useRef()
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [hasAnimated])

    return (
        <div
            ref={ref}
            className={`relative transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-xl 
        rounded-xl bg-white shadow-md p-6 m-4 max-w-md w-full
        ${hasAnimated ? 'animate-pulseOnce' : ''}
        ${withGlow ? 'ring-2 ring-indigo-400 ring-opacity-50 shadow-indigo-300' : ''}
        ${className}`}
        >
            {children}
        </div>
    )
}

export default Card