import React from 'react'

const Card = ({ title, content }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105">
        <div className="p-4 border-b">
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="p-4">
            <p>{content}</p>
        </div>
    </div>
)

export default Card