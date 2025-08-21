import React, { useRef, useState, useEffect } from 'react';

const ScrollFadeContainer = ({ children, height = 'h-[24rem]', className = '' }) => {
    const containerRef = useRef(null)
    const [isTopVisible, setIsTopVisible] = useState(false)
    const [isBottomVisible, setIsBottomVisible] = useState(true)

    const handleScroll = () => {
        const el = containerRef.current
        if (!el) return

        const { scrollTop, scrollHeight, clientHeight } = el
        setIsTopVisible(scrollTop > 5)
        setIsBottomVisible(scrollTop + clientHeight < scrollHeight - 5)
    }

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        handleScroll()
        el.addEventListener('scroll', handleScroll)
        return () => el.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 ${height} ${className}`}>
            {/* Top Fade */}
            <div
                className={`pointer-events-none absolute top-0 left-0 right-0 h-12 transition-opacity duration-300 bg-gradient-to-b from-white/90 dark:from-gray-900/90 to-transparent backdrop-blur-sm z-10 ${isTopVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Scrollable Content */}
            <div
                ref={containerRef}
                className="h-full overflow-y-auto scroll-smooth px-4 py-3 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 dark:hover:scrollbar-thumb-gray-600"
            >
                {children}
            </div>

            {/* Bottom Fade */}
            <div
                className={`pointer-events-none absolute bottom-0 left-0 right-0 h-12 transition-opacity duration-300 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent backdrop-blur-sm z-10 ${isBottomVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    )
}

export default ScrollFadeContainer