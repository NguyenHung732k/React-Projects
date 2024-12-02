import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Periodic from './Periodic'
import SearchBar from './SearchBar'
import ElementTypes from './ElementTypes'

import elements from './elements'

const PeriodicTable = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredElements, setFilteredElements] = useState([])

    const handleSearch = (query) => {
        const filtered = elements.filter((element) =>
            element.name.toLowerCase().includes(query.toLowerCase()) ||
            element.symbol.toLowerCase().includes(query.toLowerCase()) ||
            element.number.toString().includes(query)
        )
        setFilteredElements(filtered)
    }

    return (
        <motion.div
            className="p-4 bg-gray-100 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Interactive Periodic Table</h1>
            <SearchBar onSearch={handleSearch} />
            <Periodic elements={filteredElements.length > 0 ? filteredElements : elements} />
            <ElementTypes />
        </motion.div>
    )
}

export default PeriodicTable