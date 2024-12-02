import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        setQuery(event.target.value)
        onSearch(event.target.value)
    }

    return (
        <motion.input
            type="text"
            value={query}
            onChange={handleChange}
            className="p-3 w-full mb-4 border rounded-lg shadow-md"
            placeholder="Search by name, symbol, or atomic number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        />
    )
}

export default SearchBar