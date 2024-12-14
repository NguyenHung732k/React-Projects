import React from 'react'

const SavePanel = ({ imageSrc, onSaveAsImage, onSaveAsPDF }) => {
    return (
        <div className="flex justify-center gap-4 mt-6">
            <button
                onClick={() => onSaveAsImage(imageSrc)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg"
            >
                Save as Image
            </button>
            <button
                onClick={() => onSaveAsPDF(imageSrc)}
                className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg"
            >
                Save as PDF
            </button>
        </div>
    )
}

export default SavePanel