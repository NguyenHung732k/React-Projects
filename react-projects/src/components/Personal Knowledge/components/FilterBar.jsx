import React from 'react'

const FilterBar = ({ tags, onFilter }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Filter by Tags:</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => onFilter(tag)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                        #{tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterBar