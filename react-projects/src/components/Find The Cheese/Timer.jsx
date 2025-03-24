import React, { useState, useEffect } from "react"

const Timer = ({ isGameOver }) => {
    const [time, setTime] = useState(30)

    useEffect(() => {
        if (isGameOver || time === 0) return

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [time, isGameOver])

    return (
        <div className="absolute top-4 right-4 text-2xl text-gray-800">
            Time Left: {time}s
        </div>
    )
}

export default Timer