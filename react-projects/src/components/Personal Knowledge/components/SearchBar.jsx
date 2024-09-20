import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, notes }) => {
    const [query, setQuery] = useState('')

    useEffect(() => {
        onSearch(query)
    }, [query, onSearch])

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                className="p-2 border rounded-lg w-full"
                placeholder="Search notes..."
            />
        </div>
    )
}

export default SearchBar