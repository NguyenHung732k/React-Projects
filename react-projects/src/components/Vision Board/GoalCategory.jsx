import React from 'react'
import GoalCard from './GoalCard'

const GoalCategory = ({ category, goals }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-600">{category}</h2>
            <div className="flex flex-col justify-center items-center gap-6 mt-4">
                {goals.length > 0 ? (
                    goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)
                ) : (
                    <p className="text-gray-500">No goals yet in this category.</p>
                )}
            </div>
        </div>
    )
}

export default GoalCategory