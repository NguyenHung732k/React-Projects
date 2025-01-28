import React from 'react'

const DreamEntry = ({ dream }) => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg mb-4 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-indigo-600">{dream.title}</h2>
            <p className="text-gray-600 mt-2">{dream.description}</p>
            <div className="mt-4 flex flex-wrap space-x-2">
                {dream.tags.map((tag, index) => (
                    <span key={index} className="bg-indigo-200 text-indigo-700 text-sm px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">{dream.date}</p>
        </div>
    )
}

export default DreamEntry