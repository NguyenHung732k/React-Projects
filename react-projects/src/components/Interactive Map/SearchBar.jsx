import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("")

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query)
        }
    }

    return (
        <div className="mb-6">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="p-4 w-full text-lg rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Search for a location"
                />
                <button
                    onClick={handleSearch}
                    className="absolute right-2 top-2 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                >
                    🔍
                </button>
            </div>
        </div>
    )
}

export default SearchBar