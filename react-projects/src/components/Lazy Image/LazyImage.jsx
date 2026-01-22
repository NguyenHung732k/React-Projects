import React, { useState } from 'react';

const LazyImage = ({
    src = "https://images.unsplash.com/photo-1604145559206-cb0fabeccf9c?auto=format&fit=crop&w=1080&q=80",
    alt = "Mountain sunrise",
    placeholderSrc = "https://images.unsplash.com/photo-1604145559206-cb0fabeccf9c?auto=format&fit=crop&w=32&q=10&blur=50",
    className = 'rounded-xl shadow-md aspect-video'
}) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className={`relative overflow-hidden ${className}`}>
                <img
                    src={placeholderSrc}
                    alt=""
                    aria-hidden="true"
                    className={`
          absolute inset-0 w-full h-full object-cover
          transition-all duration-700 ease-in-out
          scale-110 blur-md brightness-90
          ${loaded ? 'opacity-0' : 'opacity-100'}
        `}
                />

                {/* Actual Image */}
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={`
          w-full h-full object-cover
          transition-all duration-700 ease-in-out
          ${loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'}
        `}
                />
            </div>
        </div>
    )
}

export default LazyImage