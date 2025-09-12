import React, { useRef, useEffect, useState } from 'react';

const StorySection = ({ children }) => {
    const ref = useRef(null)
    const [style, setStyle] = useState({
        opacity: 1,
        filter: 'blur(0px)',
    })

    useEffect(() => {
        const node = ref.current

        const handleScroll = () => {
            if (!node) return

            const rect = node.getBoundingClientRect()
            const windowHeight = window.innerHeight

            if (rect.top > windowHeight || rect.bottom < 0) return

            const distanceFromTop = Math.max(0, windowHeight - rect.top)
            const totalHeight = windowHeight + rect.height

            const progress = Math.min(1, distanceFromTop / totalHeight)

            const opacity = Math.max(0, 1 - progress)
            const blur = Math.min(10, 15 * progress)

            setStyle({
                opacity,
                filter: `blur(${blur}px)`,
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            ref={ref}
            className="transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:blur-sm"
            style={style}
        >
            {children}
        </div>
    )
}

export default StorySection