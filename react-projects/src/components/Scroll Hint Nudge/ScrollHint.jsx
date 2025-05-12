import React, { useEffect, useState, useRef } from 'react'

const ScrollHint = ({ scrollTargetId = '' }) => {
    const [visible, setVisible] = useState(true)
    const hasScrolled = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!hasScrolled.current && window.scrollY > 20) {
                setVisible(false)
                hasScrolled.current = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        if (scrollTargetId) {
            const target = document.getElementById(scrollTargetId)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <button
            onClick={handleClick}
            aria-label="Scroll down to next section"
            className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
        transition-opacity duration-700 ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        bg-white/30 backdrop-blur-md shadow-lg rounded-full
        hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white
        p-3 group
      `}
        >
            <svg
                className="w-6 h-6 text-gray-800 dark:text-white animate-bounce group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    )
}

export default ScrollHint