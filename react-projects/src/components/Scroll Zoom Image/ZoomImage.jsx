import React, { useState, useEffect } from "react";

const ZoomImage = ({ src, alt, className = "" }) => {
    const [scale, setScale] = useState(1)

    const handleScroll = () => {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const zoomFactor = 1 + (scrollY / maxScroll) * 0.2
        setScale(Math.min(1.3, Math.max(1, zoomFactor)))
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

            <img
                src={src}
                alt={alt}
                className="transition-transform duration-700 ease-in-out w-full h-full object-cover transform rounded-lg shadow-xl"
                style={{ transform: `scale(${scale})` }}
            />
        </div>
    )
}

export default ZoomImage