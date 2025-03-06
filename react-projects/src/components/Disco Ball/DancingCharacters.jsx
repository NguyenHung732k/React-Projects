import React from 'react'
import { motion } from 'framer-motion'

const DancingCharacters = ({ isPlaying }) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 flex justify-around p-8">
            <motion.div
                animate={{
                    y: isPlaying ? [0, -30, 0] : 0,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                className="text-6xl"
            >
                💃
            </motion.div>

            <motion.div
                animate={{
                    y: isPlaying ? [0, -30, 0] : 0,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                className="text-6xl"
            >
                🕺
            </motion.div>

            <motion.div
                animate={{
                    y: isPlaying ? [0, -30, 0] : 0,
                }}
                transition={{
                    repeat: Infinity,
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                className="text-6xl"
            >
                🎉
            </motion.div>
        </div>
    )
}

export default DancingCharacters