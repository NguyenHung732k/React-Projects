import React, { useState } from 'react'

const ImageUploader = ({ onUpload }) => {
    const [image, setImage] = useState(null)
    const [error, setError] = useState('')

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Please upload a valid image file.')
                return
            }
            setError('')
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
                onUpload(reader.result)
            }
            reader.readAsDataURL(file)
            setImage(null)
        }
    }

    return (
        <div className="flex flex-col items-center mb-4">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-2 border rounded-md p-2"
            />
            {error && <p className="text-red-500">{error}</p>}
            {image && <img src={image} alt="Preview" className="w-32 h-32 object-cover mb-2 rounded-md" />}
        </div>
    )
}

export default ImageUploader