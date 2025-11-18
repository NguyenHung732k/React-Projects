import React from 'react';

const TextImage = ({ image, title, description }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 w-full p-6 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out transform translate-y-12">
                <h3 className="text-3xl font-bold transition duration-300 ease-in-out group-hover:text-lg">{title}</h3>
                <p className="text-base mt-2 transition duration-300 ease-in-out group-hover:text-xl">{description}</p>
            </div>
        </div>
    )
}

export default TextImage