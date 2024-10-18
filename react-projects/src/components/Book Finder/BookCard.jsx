import React from 'react'

const BookCard = ({ title, image }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
        </div>
    )
}

export default BookCard