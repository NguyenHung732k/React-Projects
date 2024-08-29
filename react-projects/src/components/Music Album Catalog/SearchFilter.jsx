import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
    return (
        <div className="mb-4 flex justify-between items-center">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by artist or genre"
                className="p-2 border border-gray-300 rounded"
            />
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="ml-4 p-2 border border-gray-300 rounded"
            >
                <option value="All">All Genres</option>
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
                {/* Add more genres as needed */}
            </select>
        </div>
    )
}

export default SearchFilter