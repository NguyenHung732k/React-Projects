import React, { useState, useEffect } from 'react'

const Timer = ({ recordSession }) => {
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => setSeconds((prev) => prev + 1), 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive])

    const handleStartStop = () => {
        setIsActive(!isActive)
        if (!isActive) recordSession(seconds)
    }

    const handleReset = () => {
        setIsActive(false)
        setSeconds(0)
    }

    return (
        <div className="flex justify-center items-center space-x-6 mt-6">
            <div className="text-3xl font-semibold">{seconds}s</div>
            <button
                onClick={handleStartStop}
                className={`w-16 h-16 flex items-center justify-center rounded-full text-white transition-all duration-300 ${isActive ? 'bg-red-500 pulse' : 'bg-green-500'
                    } hover:bg-opacity-80`}
            >
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button
                onClick={handleReset}
                className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-white hover:bg-opacity-80 transition-all duration-300"
            >
                Reset
            </button>
        </div>
    )
}

export default Timer