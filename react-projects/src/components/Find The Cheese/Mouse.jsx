import React, { useState, useEffect } from "react"

const Mouse = ({ position, checkGameOver }) => {
    const [mousePosition, setMousePosition] = useState(position)

    useEffect(() => {
        const interval = setInterval(() => {
            setMousePosition({
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        checkGameOver(mousePosition)
    }, [mousePosition, checkGameOver])

    return (
        <div
            className="absolute w-8 h-8 bg-gray-700 rounded-full"
            style={{
                left: `${mousePosition.x * 50}px`,
                top: `${mousePosition.y * 50}px`,
            }}
        />
    )
}

export default Mouse