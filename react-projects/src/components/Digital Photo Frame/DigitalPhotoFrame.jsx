import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import PhotoFrame from './PhotoFrame'

const DigitalPhotoFrame = () => {
    const [images, setImages] = useState([])

    const handleImageUpload = (image) => {
        setImages((prevImages) => [...prevImages, image])
    }

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index))
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-4 max-w-7xl w-full">
                <h1 className="text-2xl font-bold text-center mb-4">Digital Photo Frame</h1>
                <ImageUploader onUpload={handleImageUpload} />
                <PhotoFrame images={images} onRemove={handleRemoveImage} />
            </div>
        </div>
    )
}

export default DigitalPhotoFrame