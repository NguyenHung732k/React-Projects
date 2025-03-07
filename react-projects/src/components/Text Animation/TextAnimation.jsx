import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"

const TextAnimation = () => {
    const [text, setText] = useState("")
    const [showConfetti, setShowConfetti] = useState(false)
    const [color, setColor] = useState("text-black")
    const [position, setPosition] = useState({ x: 0, y: 0 })

    // Bounce the text around and change colors
    useEffect(() => {
        const interval = setInterval(() => {
            setColor(`text-${getRandomColor()}`)
            const newX = (Math.random() - 0.5) * 800
            const newY = (Math.random() - 0.5) * 800
            setPosition({ x: newX, y: newY })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const handleSubmit = () => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 30000) // Hide confetti after 30 seconds
    }

    const getRandomColor = () => {
        const colors = ["red-500", "blue-500", "green-500", "purple-500", "yellow-500"]
        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
            {showConfetti && <Confetti />}

            <div className="flex flex-col items-center space-y-6 p-6 bg-white bg-opacity-60 rounded-xl shadow-lg">

                <h1 className="text-3xl font-extrabold text-gray-800">Spinning Text Animation</h1>

                <input
                    type="text"
                    className="p-3 mb-4 w-72 text-xl font-medium text-gray-700 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    placeholder="Type something..."
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                <motion.div
                    className={`text-4xl font-bold ${color} text-center shadow-lg`}
                    animate={{
                        rotate: 360, // Continuous rotation
                        x: position.x,
                        y: position.y,
                    }}
                    transition={{
                        rotate: {
                            repeat: Infinity,
                            repeatType: "loop",  // Infinite loop for rotation
                            duration: 5,          // Rotation duration in seconds
                            ease: "linear",      // Linear easing for smooth constant rotation
                        },
                        x: {
                            type: "spring",
                            stiffness: 100,      // For smooth horizontal movement
                            damping: 15,         // For less bouncy effect
                        },
                        y: {
                            type: "spring",
                            stiffness: 100,      // For smooth vertical movement
                            damping: 15,         // For less bouncy effect
                        }
                    }}
                >
                    {text || "Spinning Text!"}
                </motion.div>

                <button
                    onClick={handleSubmit}
                    className="mt-4 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none transform hover:scale-105 transition duration-300 ease-in-out shadow-md"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default TextAnimation