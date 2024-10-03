import React from 'react'

const LookbookItem = ({ item }) => {
    return (
        <div className="border rounded-lg p-4 m-2 transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
        </div>
    )
}

export default LookbookItem