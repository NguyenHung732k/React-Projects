import React from 'react'

const SearchBar = ({ searchQuery, handleSearchChange, handleItemSelection }) => {
    return (
        <div className="flex items-center justify-center space-x-4">
            <input
                type="text"
                placeholder="Search for an item (e.g., Apple, Milk)"
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={() => handleItemSelection(searchQuery)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar