import React from 'react'

const ExperimentCard = ({ title, description, onStart }) => {
    return (
        <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-white cursor-pointer hover:bg-gray-700"
            onClick={onStart}
        >
            <div className="font-semibold text-xl">{title}</div>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}

export default ExperimentCard