import React from "react"
import "./Item.css"

const Item = ({ item }) => {
    const { name, reaction } = item

    return (
        <div className="item-container bg-white rounded-lg shadow-xl p-6 flex flex-col items-center transform hover:scale-105 transition duration-300">
            <img
                src={`https://via.placeholder.com/150?text=${name}`}
                alt={name}
                className="w-32 h-32 mb-4 rounded-lg shadow-md"
            />
            <p className="text-xl font-semibold text-gray-800 mb-4">{name}</p>
            <div className={`reaction ${reaction}`} />
        </div>
    )
}

export default Item