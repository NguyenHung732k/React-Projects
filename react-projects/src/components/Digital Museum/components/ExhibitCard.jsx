import React from 'react'
import { Link } from 'react-router-dom'

const ExhibitCard = ({ exhibit }) => {

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-48 object-cover"
                src={exhibit.imageUrl || '/images/default-exhibit.jpg'}
                alt={exhibit.title}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{exhibit.title}</h2>
                <p className="text-gray-700 mt-2">{exhibit.description}</p>
                <p className="text-gray-600 mt-2">Opening on: {exhibit.openingDate}</p>
                <div className="mt-4">
                    <Link
                        to={`/exhibit/${exhibit.id}`}
                        className="text-blue-500 hover:text-blue-700 text-decoration-none"
                    >
                        View Exhibit Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ExhibitCard