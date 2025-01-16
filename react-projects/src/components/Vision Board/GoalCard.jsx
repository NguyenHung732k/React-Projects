import React from 'react'

const GoalCard = ({ goal }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 p-4">
            <img
                src={goal.type === 'image' ? 'https://via.placeholder.com/150' : ''}
                alt="Goal"
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700">{goal.text}</h3>
            <p className="text-gray-500 mt-2">{goal.type === 'quote' ? `"${goal.text}"` : ''}</p>

            <div className="flex justify-between items-center gap-1 mt-4">
                <button className="bg-green-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-green-600">
                    Track Progress
                </button>
                <span className="text-gray-400">50% Completed</span>
            </div>
        </div>
    )
}

export default GoalCard