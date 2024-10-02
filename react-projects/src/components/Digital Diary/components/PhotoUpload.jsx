import React from 'react'

const PhotoUpload = ({ setPhoto, photo }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPhoto(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="mb-4">
            <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2" />
            {photo && <img src={photo} alt="Preview" className="mt-2 w-full h-auto rounded shadow-md" />}
        </div>
    )
}

export default PhotoUpload