import React from "react"
import { motion } from "framer-motion"

const Victory = ({ isVictory, onRestart }) => {
    if (!isVictory) return null

    return (
        <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-white">
            <motion.div
                className="text-4xl font-bold text-yellow-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                You Found the Cheese! 🧀
            </motion.div>
            <motion.div
                className="absolute bottom-10 bg-yellow-500 text-white px-4 py-2 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                onClick={onRestart}
            >
                Play Again
            </motion.div>
        </div>
    )
}

export default Victory