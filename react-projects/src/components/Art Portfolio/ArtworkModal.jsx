import React from 'react'
import { motion } from 'framer-motion'

const ArtworkModal = ({ artwork, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="bg-white p-4 rounded shadow-lg"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "-100vh" }}
                transition={{ duration: 0.3 }}
            >
                <button onClick={onClose} className="text-red-500">Close</button>
                <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-auto" />
                <h2 className="text-xl font-semibold">{artwork.title}</h2>
                <p>{artwork.description}</p>
            </motion.div>
        </motion.div>
    )
}

export default ArtworkModal