import React, { useState } from 'react'

const images = [
    {
        src: 'https://via.placeholder.com/600',
        caption: 'Image 1 Caption',
    },
    {
        src: 'https://via.placeholder.com/600/FF0000',
        caption: 'Image 2 Caption',
    },
    {
        src: 'https://via.placeholder.com/600/00FF00',
        caption: 'Image 3 Caption',
    },
    {
        src: 'https://via.placeholder.com/600/0000FF',
        caption: 'Image 4 Caption',
    },
]

const ImageGallery = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const openLightbox = (index) => {
        setCurrentIndex(index)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        )
    }

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="cursor-pointer">
                    <img
                        src={image.src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        onClick={() => openLightbox(index)}
                    />
                </div>
            ))}

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={closeLightbox}
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-4 text-white text-2xl"
                        onClick={prevImage}
                    >
                        &#10094;
                    </button>
                    <button
                        className="absolute right-4 text-white text-2xl"
                        onClick={nextImage}
                    >
                        &#10095;
                    </button>
                    <div className="flex flex-col items-center">
                        <img
                            src={images[currentIndex].src}
                            alt="Lightbox"
                            className="max-w-full max-h-full object-contain transition-transform animate-scale-in"
                        />
                        <p className="mt-4 text-white text-lg text-center">
                            {images[currentIndex].caption}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ImageGallery