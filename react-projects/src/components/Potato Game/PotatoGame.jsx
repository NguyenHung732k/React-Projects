import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"
import Lottie from "react-lottie"
import fireAnimation from "./animations/fire.json"
import './PotatoGame.css'

const heatLevels = [
    { color: "bg-yellow-300", face: "😐" },
    { color: "bg-orange-400", face: "😅" },
    { color: "bg-red-500", face: "🔥" },
    { color: "bg-red-700", face: "💀" },
]

const potatoSizes = ["w-20 h-20", "w-24 h-24", "w-28 h-28", "w-32 h-32"]

const PotatoGame = () => {
    const [heat, setHeat] = useState(0)
    const [burning, setBurning] = useState(false)
    const [exploded, setExploded] = useState(false)
    const [showFire, setShowFire] = useState(false)

    useEffect(() => {
        if (heat >= heatLevels.length) {
            setExploded(true)
        } else {
            const interval = setInterval(() => setHeat((h) => h + 1), 1500)
            return () => clearInterval(interval)
        }
    }, [heat])

    const handlePotatoClick = (event) => {
        event.stopPropagation()
        setBurning(true)
        setShowFire(true)

        setTimeout(() => {
            setBurning(false)
            setShowFire(false)
        }, 500)
    }

    const handlePass = () => {
        if (!exploded) {
            setHeat(0)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white" onClick={handlePass}>
            {exploded && <Confetti />}

            <h1 className="text-5xl font-bold font-luckiest mb-6 text-yellow-300">
                Hot Potato! 🥔🔥
            </h1>

            {/* Progress Bar */}
            <div className="w-64 bg-gray-700 rounded-full overflow-hidden mb-4">
                <div
                    className={`h-4 transition-all ${heatLevels[heat]?.color}`}
                    style={{ width: `${(heat / heatLevels.length) * 100}%` }}
                ></div>
            </div>

            {/* Game */}
            {!exploded ? (
                <motion.div
                    className={`relative rounded-full flex items-center justify-center 
            ${heatLevels[heat]?.color} ${potatoSizes[heat]} 
            ${burning ? "animate-shake ring-4 ring-yellow-300" : "shadow-lg"} transition-all`}
                    onClick={handlePotatoClick}
                    animate={{ scale: burning ? 1.2 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="text-5xl">{heatLevels[heat]?.face}</span>

                    {/* Fire Animation */}
                    {showFire && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -10 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute"
                        >
                            <Lottie options={{ animationData: fireAnimation, loop: false }} height={60} width={60} />
                        </motion.div>
                    )}
                </motion.div>
            ) : (
                <div className="text-center">
                    <h2 className="text-4xl font-luckiest text-red-500 mt-6">💥 BOOM! 💥</h2>
                    <button
                        className="mt-4 px-6 py-3 bg-green-500 text-xl font-bold rounded-lg hover:bg-green-600 transition"
                        onClick={() => {
                            setExploded(false)
                            setHeat(0)
                        }}
                    >
                        Restart
                    </button>
                </div>
            )}
        </div>
    )
}

export default PotatoGame