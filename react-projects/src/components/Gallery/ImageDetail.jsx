import React from 'react'
import { useParams, Link } from 'react-router-dom'



const ImageDetail = () => {
    
    const { id } = useParams()
    const generateImageUrl = (width, height) => `https://picsum.photos/${width}/${height}?random=${Math.random()}`

    const image = {
        src: generateImageUrl(1200, 1000),
        title: `Image ${id}`,
        description: `Description for Image ${id}`
    }


    return (
        <div className="container mx-auto p-4">
            <Link to="/" className="flex justify-start items-center text-xl text-blue-500 text-decoration-none">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                Back to Gallery
            </Link>
            <div className="mt-4">
                <img src={image.src} alt={image.title} className="w-full h-full object-cover rounded-lg mb-4" />
                <h1 className="text-3xl font-bold">{image.title}</h1>
                <p className="mt-2">{image.description}</p>
            </div>
        </div>
    )
}

export default ImageDetail