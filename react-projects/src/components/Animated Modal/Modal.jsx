import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ isOpen, onClose, children }) => {
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const modalVariants = {
        hidden: { scale: 0.9, opacity: 0, y: "10%" },
        visible: { scale: 1, opacity: 1, y: "0%", transition: { type: "spring", stiffness: 300, damping: 20 } },
        exit: { scale: 0.9, opacity: 0, y: "20%", transition: { duration: 0.3 } },
    }

    return (
        <motion.div
            className="fixed inset-0 bg-slate-300 bg-opacity-70 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            exit="hidden"
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
                variants={modalVariants}
                initial="hidden"
                animate={isOpen ? 'visible' : 'hidden'}
                exit="exit"
                transition={{ duration: 0.4 }}
                onClick={(event) => event.stopPropagation()}
            >
                <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
                <p className="text-gray-600 mb-6">{children}</p>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Modal