import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Cheese = ({ position, checkVictory }) => {
    const [cheesePosition, setCheesePosition] = useState(position)

    useEffect(() => {
        const interval = setInterval(() => {
            setCheesePosition({
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            className="absolute w-10 h-10 bg-yellow-400 rounded-full cursor-pointer hover:scale-110"
            style={{
                left: `${cheesePosition.x * 50}px`,
                top: `${cheesePosition.y * 50}px`,
            }}
            onClick={() => checkVictory(cheesePosition)}
            whileHover={{
                rotate: [0, 15, -15, 0],
                scale: 1.2,
            }}
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 300,
            }}
        />
    )
}

export default Cheese