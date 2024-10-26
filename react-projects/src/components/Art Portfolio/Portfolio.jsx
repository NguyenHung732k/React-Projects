import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ArtworkModal from './ArtworkModal'

const Portfolio = ({ artworks }) => {
    const [selectedArtwork, setSelectedArtwork] = useState(null)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {artworks.map((artwork) => (
                <motion.div
                    key={artwork.id}
                    className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
                    onClick={() => setSelectedArtwork(artwork)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-48 object-cover cursor-pointer"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{artwork.title}</h2>
                        <p className="text-gray-600">{artwork.description}</p>
                    </div>
                </motion.div>
            ))}
            {selectedArtwork && <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />}
        </div>
    )
}

export default Portfolio