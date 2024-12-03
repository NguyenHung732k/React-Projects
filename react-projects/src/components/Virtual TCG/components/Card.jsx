import React from 'react'

const Card = ({ card }) => {
    return (
        <div className="w-56 p-4 bg-card border border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition duration-200">
            <img src={card.image} alt={card.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{card.name}</h3>
                <p className="text-sm text-gray-600">Attack: {card.attack}</p>
                <p className="text-sm text-gray-600">Defense: {card.defense}</p>
            </div>
        </div>
    )
}

export default Card