import React from 'react'

const FileUpload = ({ onFileSelect }) => {
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files)
        if (files.length > 0) {
            onFileSelect(files)
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                multiple
            />
            <label htmlFor="file-upload" className="cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                Upload Audio Files
            </label>
        </div>
    )
}

export default FileUpload