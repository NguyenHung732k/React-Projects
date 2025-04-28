import React, { useEffect, useState } from 'react'

const ParallaxSection = ({ title, subtitle, bgColor, image }) => {
    const [offsetY, setOffsetY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`h-screen w-full relative overflow-hidden ${bgColor}`}>
            {image && (
                <img
                    src={image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    style={{
                        transform: `translateY(${offsetY * 0.15}px)`,
                        transition: 'transform 0.2s ease-out',
                    }}
                />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1
                    className="text-5xl md:text-7xl font-semibold mb-4"
                    style={{
                        transform: `translateY(${offsetY * 0.05}px)`,
                        transition: 'transform 0.2s ease-out',
                    }}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p
                        className="text-lg md:text-2xl text-gray-300 max-w-2xl"
                        style={{
                            transform: `translateY(${offsetY * 0.1}px)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}

export default ParallaxSection