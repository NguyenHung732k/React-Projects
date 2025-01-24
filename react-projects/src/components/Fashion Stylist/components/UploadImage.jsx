import React from "react"

const UploadImage = ({ setUploadedImage }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setUploadedImage(URL.createObjectURL(file))
    }

    return (
        <div className="flex justify-center items-center flex-col mb-6">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="upload-input"
            />
            <label
                htmlFor="upload-input"
                className="cursor-pointer bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg transition-transform hover:scale-105 transform duration-300"
            >
                Upload Your Photo
            </label>
        </div>
    )
}

export default UploadImage