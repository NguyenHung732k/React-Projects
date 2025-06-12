import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import './LikeButton.css'

const particleCount = 16

const LikeButton = () => {
    const [liked, setLiked] = useState(false)
    const [count, setCount] = useState(99)
    const [burst, setBurst] = useState(false)

    const handleClick = () => {
        if (!liked) {
            setLiked(true)
            setCount((c) => c + 1)
            setBurst(true)
            setTimeout(() => setBurst(false), 800)
        }
    }

    return (
        <div className="relative flex flex-col items-center space-y-1">
            <motion.button
                onClick={handleClick}
                className="relative w-16 h-16 flex items-center justify-center rounded-full"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
            >
                <motion.div
                    animate={{ scale: liked ? 1.3 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    <FaHeart
                        className={`text-4xl transition-colors duration-300 ${liked ? 'text-pink-500' : 'text-gray-300'
                            }`}
                    />
                </motion.div>

                <AnimatePresence>
                    {burst && (
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {Array.from({ length: particleCount }).map((_, i) => {
                                const angle = (i / particleCount) * 2 * Math.PI;
                                const distance = 40;
                                return (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full firework-particle"
                                        style={{ top: '50%', left: '50%' }}
                                        animate={{
                                            x: Math.cos(angle) * distance,
                                            y: Math.sin(angle) * distance,
                                            scale: [1, 0],
                                            opacity: [1, 0],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: 'easeOut',
                                        }}
                                    />
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            <motion.div
                key={count}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-sm font-medium text-gray-700"
            >
                {count}
            </motion.div>
        </div>
    )
}

export default LikeButton