import { useState } from "react"
import { motion } from "framer-motion"

const JigglyText = () => {
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const handleInputChange = (event) => {
        setText(event.target.value)
        setIsTyping(true)
    }

    const handleReset = () => {
        setText("")
        setIsTyping(false)
    }

    const getRandomBounce = () => {
        const randomRotation = Math.random() * 360
        return {
            x: `${Math.random() * 40}px`,
            y: `${Math.random() * 40}px`,
            rotate: `${randomRotation}deg`,
            scale: 1 + Math.random() * 0.5,
            opacity: 1 - Math.random() * 0.5,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 p-5">
            <div className="w-full max-w-3xl">
                <textarea
                    className="w-full h-40 p-5 text-lg text-white bg-gray-800 rounded-xl border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-lg resize-none transition-all"
                    placeholder="Type something here..."
                    value={text}
                    onChange={handleInputChange}
                    onFocus={() => setIsTyping(true)}
                />

                <motion.div
                    className="mt-10 text-center font-bold text-5xl text-white"
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                    }}
                    animate={getRandomBounce()}
                >
                    {text}
                </motion.div>
            </div>

            {isTyping && (
                <button
                    onClick={handleReset}
                    className="mt-8 px-6 py-2 text-xl font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Reset Text
                </button>
            )}
        </div>
    )
}

export default JigglyText