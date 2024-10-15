import React, { useState } from 'react'
import attractions from '../data/attractions'
import AttractionCard from '../components/AttractionCard'
import InfoModal from '../components/InfoModal'
import { motion } from 'framer-motion'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedAttraction, setSelectedAttraction] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const filteredAttractions = attractions.filter(attraction =>
        attraction.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleCardClick = (attraction) => {
        setSelectedAttraction(attraction)
    }

    const handleCloseModal = () => {
        setSelectedAttraction(null)
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.body.classList.toggle('dark', !isDarkMode)
    }

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Local Attractions</h1>
            <input
                type="text"
                placeholder="Search attractions..."
                className="mt-4 p-2 border border-gray-300 rounded w-3/6"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className="flex flex-wrap mt-4">
                {filteredAttractions.map((attraction) => (
                    <motion.div
                        key={attraction.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AttractionCard
                            attraction={attraction}
                            onClick={() => handleCardClick(attraction)}
                        />
                    </motion.div>
                ))}
            </div>
            <InfoModal attraction={selectedAttraction} onClose={handleCloseModal} />
        </div>
    )
}

export default Home