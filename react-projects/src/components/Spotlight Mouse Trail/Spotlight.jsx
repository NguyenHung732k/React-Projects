import React, { useEffect, useRef } from 'react';

const Spotlight = () => {
    const spotlightRef = useRef(null)
    const position = useRef({ x: -200, y: -200 })
    const target = useRef({ x: -200, y: -200 })

    useEffect(() => {
        const updatePosition = () => {
            position.current.x += (target.current.x - position.current.x) * 0.1
            position.current.y += (target.current.y - position.current.y) * 0.1

            if (spotlightRef.current) {
                spotlightRef.current.style.background = `
          radial-gradient(
            250px at ${position.current.x}px ${position.current.y}px,
            rgba(255, 255, 255, 0.12),
            transparent 80%
          )
        `
            }

            requestAnimationFrame(updatePosition)
        }

        const handleMouseMove = (event) => {
            target.current = { x: event.clientX, y: event.clientY }
        }

        window.addEventListener('mousemove', handleMouseMove)
        updatePosition()

        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div
            ref={spotlightRef}
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
            style={{
                mixBlendMode: 'screen',
                opacity: 1,
                filter: 'blur(60px)',
            }}
        />
    )
}

export default Spotlight