import React, { useState } from "react"

const images = [
    { src: "https://placehold.co/600x400", alt: "Image 1" },
    { src: "https://placehold.co/600x400", alt: "Image 2" },
    { src: "https://placehold.co/600x400", alt: "Image 3" },
    { src: "https://placehold.co/600x400", alt: "Image 4" },
    { src: "https://placehold.co/600x400", alt: "Image 5" },
    { src: "https://placehold.co/600x400", alt: "Image 6" },
    { src: "https://placehold.co/600x400", alt: "Image 7" },
    { src: "https://placehold.co/600x400", alt: "Image 8" },
]

const Gallery = () => {
    const [isMasonry, setIsMasonry] = useState(false)

    const toggleLayout = () => setIsMasonry(!isMasonry)

    return (
        <div>
            <button
                onClick={toggleLayout}
                className="px-4 py-2 rounded-lg text-white bg-primary hover:bg-secondary transition-all duration-200 mb-6 mx-auto block"
            >
                Toggle Layout
            </button>

            <div className={`grid ${isMasonry ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} gap-6 p-6`}>
                {images.map((image, index) => (
                    <ImageCard
                        key={index}
                        imageSrc={image.src}
                        altText={image.alt}
                        className={`transition-all ease-in-out`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery