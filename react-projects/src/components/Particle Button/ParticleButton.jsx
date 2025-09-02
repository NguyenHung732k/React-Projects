import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FaHeart } from "react-icons/fa"
import clsx from "clsx"

const Particle = ({ angle, delay }) => {
    const distance = 80
    const rad = (angle * Math.PI) / 180

    return (
        <motion.div
            className="absolute w-4 h-4"
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
                x: distance * Math.cos(rad),
                y: distance * Math.sin(rad),
                opacity: 0,
                scale: 0.6,
                rotate: 360,
            }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.8,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 10,
            }}
        >
            <svg
                className="w-full h-full text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 2l2.39 7.26H22l-5.8 4.21L17.6 22 12 17.77 6.4 22l1.4-8.53L2 9.26h7.61z" />
            </svg>
        </motion.div>
    )
}

const ParticleButton = () => {
    const [liked, setLiked] = useState(false)
    const [burstKey, setBurstKey] = useState(0)

    const toggleLike = () => {
        setLiked(!liked)
        setBurstKey(prev => prev + 1)
    }

    const particles = [...Array(10)].map((_, i) => ({
        angle: (360 / 10) * i + Math.random() * 10,
        delay: i * 0.03,
    }))

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-24 h-24 group">
                {/* Particle Burst */}
                <AnimatePresence>
                    {liked && (
                        <div className="absolute inset-0" key={burstKey}>
                            {particles.map(({ angle, delay }, i) => (
                                <Particle key={i} angle={angle} delay={delay} />
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                {/* Heart Button */}
                <motion.button
                    onClick={toggleLike}
                    aria-label={liked ? "Unlike" : "Like"}
                    whileTap={{ scale: 0.85 }}
                    animate={{ scale: liked ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="text-4xl focus:outline-none transition-colors duration-300"
                >
                    <FaHeart
                        className={clsx("transition-all duration-300", {
                            "text-pink-500 drop-shadow-md": liked,
                            "text-gray-400": !liked,
                        })}
                    />
                </motion.button>

                <div className="absolute -bottom-8 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {liked ? "Unlike" : "Like"}
                </div>
            </div>
        </div>
    )
}

export default ParticleButton