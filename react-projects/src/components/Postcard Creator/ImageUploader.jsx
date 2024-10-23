import React from 'react'

const ImageUploader = ({ setImage }) => {
    return (
        <input
            type="file"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
            className="mt-4 border border-gray-300 rounded-lg p-2 cursor-pointer"
        />
    )
}

export default ImageUploader