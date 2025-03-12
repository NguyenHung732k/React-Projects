import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Object = ({ item, onCatch, gameOver }) => {
    const [caught, setCaught] = useState(false)

    const handleClick = () => {
        if (gameOver || caught) return
        setCaught(true)
        onCatch(item)
    };

    useEffect(() => {
        if (caught) {
            setTimeout(() => {
                setCaught(false)
            }, 500)
        }
    }, [caught])

    return (
        <motion.div
            className="absolute"
            initial={{ top: -100, left: `${Math.random() * 100}vw` }}
            animate={{ top: "100vh" }}
            transition={{
                repeat: Infinity,
                duration: Math.random() * 2 + 30,
                ease: "easeInOut",
            }}
            onClick={handleClick}
        >
            <img
                src={item.image}
                alt={item.name}
                className={`w-20 h-20 ${caught ? "animate-ping" : ""} cursor-pointer`}
            />
        </motion.div>
    )
}

export default Object