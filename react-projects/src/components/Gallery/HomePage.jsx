import React from 'react'
import { Link } from 'react-router-dom'



const generateImageUrl = (width, height) => `https://picsum.photos/${width}/${height}?random=${Math.random()}`

const images = [
    { id: 1, src: generateImageUrl(400, 300), title: 'Image 1' },
    { id: 2, src: generateImageUrl(400, 300), title: 'Image 2' },
    { id: 3, src: generateImageUrl(400, 300), title: 'Image 3' },
    { id: 4, src: generateImageUrl(400, 300), title: 'Image 4' },
    { id: 5, src: generateImageUrl(400, 300), title: 'Image 5' },
    { id: 6, src: generateImageUrl(400, 300), title: 'Image 6' },
    { id: 7, src: generateImageUrl(400, 300), title: 'Image 6' },
    { id: 8, src: generateImageUrl(400, 300), title: 'Image 6' },
    { id: 9, src: generateImageUrl(400, 300), title: 'Image 6' },
    { id: 10, src: generateImageUrl(400, 300), title: 'Image 6' },
    { id: 11, src: generateImageUrl(400, 300), title: 'Image 6' },
    { id: 12, src: generateImageUrl(400, 300), title: 'Image 6' },
]
const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image) => (
                    <Link to={`/image/${image.id}`} key={image.id}>
                        <div className="w-full flex flex-col justify-center items-center bg-gray-200 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg mb-2" />
                            <h2 className="text-xl font-semibold">{image.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomePage