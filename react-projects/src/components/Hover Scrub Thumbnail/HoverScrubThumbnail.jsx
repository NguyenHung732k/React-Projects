import React, { useRef, useState } from 'react'

const HoverScrubThumbnail = ({
    spriteSrc,
    videoSrc,
    frameCount = 10,
    frameWidth = 500,
    frameHeight = 300,
    className = '',
}) => {
    const [hovered, setHovered] = useState(false)
    const [frameIndex, setFrameIndex] = useState(0)
    const containerRef = useRef(null)

    const handleMouseMove = (event) => {
        if (!containerRef.current) return

        const { left, width } = containerRef.current.getBoundingClientRect()
        const x = event.clientX - left
        const percent = x / width
        const index = Math.min(
            frameCount - 1,
            Math.floor(percent * frameCount)
        )
        setFrameIndex(index)
    }

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            role="button"
            aria-label="Video preview thumbnail"
            className={`group relative overflow-hidden rounded-lg shadow-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
            style={{ width: frameWidth, height: frameHeight }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false)
                setFrameIndex(0)
            }}
            onMouseMove={handleMouseMove}
        >
            <div
                className={`absolute top-0 left-0 transition-opacity duration-150 ease-out ${hovered ? 'opacity-100 z-10' : 'opacity-0'
                    }`}
                style={{
                    backgroundImage: `url(${spriteSrc})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: `${frameWidth * frameCount}px auto`,
                    backgroundPosition: `-${frameWidth * frameIndex}px 0px`,
                    width: frameWidth,
                    height: frameHeight,
                }}
            />

            <video
                src={videoSrc}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-150 ${hovered ? 'opacity-0' : 'opacity-100'
                    }`}
                muted
                autoPlay
                loop
                playsInline
            />

            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg pointer-events-none" />

            {!hovered && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <svg className="w-10 h-10 text-white opacity-80 group-hover:opacity-0 transition-opacity duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                </div>
            )}

            {hovered && (
                <div className="absolute bottom-1 right-1 z-20 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {Math.floor((frameIndex / (frameCount - 1)) * 100)}%
                </div>
            )}
        </div>
    )
}

export default HoverScrubThumbnail