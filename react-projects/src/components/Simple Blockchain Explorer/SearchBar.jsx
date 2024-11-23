import React from "react"

const SearchBar = ({ setSearchQuery, setSearchType }) => {
    const handleSearchChange = (event) => {
        const value = event.target.value
        setSearchQuery(value)
    }

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value)
    }

    return (
        <div className="flex flex-col md:flex-row justify-center mb-8">
            <input
                type="text"
                placeholder="Search Block or Transaction..."
                onChange={handleSearchChange}
                className="px-6 py-3 w-full md:w-1/3 text-lg rounded-md border-2 border-indigo-600 bg-gray-800 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 md:mb-0"
            />
            <select
                onChange={handleSearchTypeChange}
                className="px-6 py-3 w-full md:w-1/4 text-lg rounded-md border-2 border-indigo-600 bg-gray-800 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 md:ml-4"
            >
                <option value="block">Block</option>
                <option value="transaction">Transaction</option>
            </select>
        </div>
    )
}

export default SearchBar