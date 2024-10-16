import React, { useEffect, useState } from 'react'

const PhotoFrame = ({ images, onRemove }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (images.length === 0) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [images])

    return (
        <div className="relative w-full h-[700px] flex items-center justify-center border-4 border-gray-300 overflow-hidden rounded-lg">
            {images.length > 0 ? (
                <>
                    <img
                        src={images[currentImageIndex]}
                        alt="Slideshow"
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <button
                        onClick={() => onRemove(currentImageIndex)}
                        className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-1.5 hover:bg-red-700"
                    >
                        x
                    </button>
                </>
            ) : (
                <p className="text-gray-500">No images uploaded</p>
            )}
        </div>
    )
}

export default PhotoFrame