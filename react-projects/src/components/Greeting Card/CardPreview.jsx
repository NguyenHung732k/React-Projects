import React from 'react'

const CardPreview = ({ text, image }) => {
    return (
        <div className="relative w-full max-w-sm h-72 border-4 border-gray-300 rounded-lg shadow-2xl overflow-hidden bg-white">
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{ backgroundImage: `url(${image || 'https://via.placeholder.com/300x450'})` }}
            >
            </div>
            <div className="absolute inset-0 flex justify-center items-center p-4 text-white text-xl font-semibold bg-black bg-opacity-50">
                {text}
            </div>
        </div>
    )
}

export default CardPreview