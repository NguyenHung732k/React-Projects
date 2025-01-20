import React from 'react'

const CraftFilter = ({ onFilterChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Filter by Difficulty</label>
            <select
                className="w-full p-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500"
                onChange={(event) => onFilterChange(event.target.value)}
            >
                <option value="">All Difficulty Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    )
}

export default CraftFilter