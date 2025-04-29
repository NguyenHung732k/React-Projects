import React, { useState } from 'react'
import { motion } from 'framer-motion'

const MiniGame = () => {
    const [score, setScore] = useState(0)

    return (
        <div className="mt-8 p-4 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md text-white">
            <p className="text-sm mb-3">Click the alien to boost your score!</p>
            <motion.button
                onClick={() => setScore(score + 1)}
                className="text-4xl"
                whileTap={{ scale: 1.2, rotate: 20 }}
                aria-label="Click the alien"
            >
                👾
            </motion.button>
            <p className="mt-2 text-sm text-indigo-300">Score: {score}</p>
        </div>
    )
}

export default MiniGame