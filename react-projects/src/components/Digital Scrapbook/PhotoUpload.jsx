import React, { useState } from 'react'

const PhotoUpload = ({ updatePageContent }) => {
    const [images, setImages] = useState([])

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files)
        const newImages = files.map(file => URL.createObjectURL(file))
        const allImages = [...images, ...newImages]
        setImages(allImages)
        updatePageContent(allImages)
    };

    const removeImage = (img) => {
        const updatedImages = images.filter(image => image !== img)
        setImages(updatedImages)
        updatePageContent(updatedImages)
    }

    return (
        <div>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="mb-2" />
            <div className="flex flex-wrap mt-2">
                {images.map((img, index) => (
                    <div key={index} className="relative m-1">
                        <img src={img} alt="uploaded" className="h-20 w-20 object-cover rounded" />
                        <button onClick={() => removeImage(img)} className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs">X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PhotoUpload