import { useState } from "react"
import { motion } from "framer-motion"

export default function LazyButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState(1)

  const moveButton = () => {
    const newX = (Math.random() - 0.5) * 400
    const newY = (Math.random() - 0.5) * 400
    setPosition({ x: newX, y: newY })
    setSize(0.5)
  };

  const handleClick = () => {
    setSize(1.3)
    setTimeout(() => setSize(1), 300)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <motion.div
        animate={{ x: position.x, y: position.y, scale: size }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="relative"
      >
        <button
          onMouseEnter={moveButton}
          onClick={handleClick}
          className="text-lg font-bold p-5 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg transition-all"
        >
          Click Me!
        </button>
      </motion.div>
    </div>
  )
}
