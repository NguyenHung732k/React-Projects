import React, { useState, useEffect } from "react"

const Timer = ({ onTimerEnd }) => {
    const [timeLeft, setTimeLeft] = useState(600)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000)
        } else if (timeLeft === 0) {
            onTimerEnd()
            setIsActive(false)
        }

        return () => clearInterval(interval)
    }, [isActive, timeLeft])

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
            <div className="text-center text-3xl font-bold">
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
            </div>
            <div className="flex justify-between mt-4 gap-2">
                <button
                    className={`p-2 ${isActive ? "bg-red-500" : "bg-green-500"} rounded`}
                    onClick={() => setIsActive(!isActive)}
                >
                    {isActive ? "Pause" : "Start"}
                </button>
                <button
                    className="p-2 bg-gray-500 rounded"
                    onClick={() => setTimeLeft(600)}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer