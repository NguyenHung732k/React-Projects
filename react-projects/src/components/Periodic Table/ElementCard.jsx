import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

const ElementCard = ({ element }) => {
    const [selectedElement, setSelectedElement] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleElementClick = (element) => {
        setSelectedElement(element)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedElement(null)
    }

    return (
        <motion.div
            className="w-24 h-24 flex flex-col justify-between items-center p-2"
            onClick={() => handleElementClick(element)}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <p className="text-white dark:text-gray-300 m-0">{element.number}</p>
            <p className="text-center text-white dark:text-gray-300 text-2xl font-medium font-mono m-0">{element.symbol}</p>
            <p className="text-center text-white dark:text-gray-300 text-sm m-0">{element.name}</p>

            {isModalOpen &&
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Modal element={selectedElement} onClose={closeModal} />
                </motion.div>
            }
        </motion.div>
    )
}

export default ElementCard