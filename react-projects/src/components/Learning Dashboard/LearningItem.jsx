import React from 'react'

const LearningItem = ({ item, onDelete }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500 mb-4">{item.type}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                    className="h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%`, backgroundColor: '#48bb78' }}
                />
            </div>
            <button
                onClick={onDelete}
                className="text-red-500 hover:text-red-700 font-medium transition-colors duration-300"
            >
                Delete
            </button>
        </div>
    )
}

export default LearningItem