import React from 'react'

const GameCard = ({ game }) => {
    return (
        <div className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
            <img className="w-full h-48 object-cover" src={game.image} alt={game.title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-500">{game.title}</h3>
                <p className="text-gray-600 text-sm">{game.description}</p>
                <div className="mt-2 flex items-center">
                    <span className="text-yellow-500">{'⭐'.repeat(game.rating)}</span>
                    <span className="ml-2 text-gray-500">{game.rating} / 5</span>
                </div>
            </div>
        </div>
    )
}

export default GameCard