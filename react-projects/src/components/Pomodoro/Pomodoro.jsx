import React, { useEffect, useState } from 'react'

const Pomodoro = () => {

    const [isActive, setIsActive] = useState(false)
    const [isBreak, setIsBreak] = useState(false)
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [workDuration, setWorkDuration] = useState(25 * 60)
    const [breakDuration, setBreakDuration] = useState(5 * 60)


    useEffect(() => {
        let interval = null

        if (isActive) {
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev === 0) {
                        if (isBreak) {
                            setIsBreak(false)
                            setTimeLeft(workDuration)
                        } else {
                            setIsBreak(true)
                            setTimeLeft(breakDuration)
                        }
                    } else {
                        return prev - 1
                    }
                })
            }, 1000)
        } else if (!isActive && timeLeft !== 0) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isActive, timeLeft, isBreak, workDuration, breakDuration])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    const handleReset = () => {
        setIsActive(false)
        setIsBreak(false)
        setTimeLeft(workDuration)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className={`w-2/6 border rounded-lg p-8 text-center mb-6 ${isBreak ? 'bg-green-200' : 'bg-sky-300'}`}>
                <h1 className="text-4xl text-white font-bold mb-4">{isBreak ? 'Break Time' : 'Work Time'}</h1>
                <p className="text-6xl text-white font-mono">{formatTime(timeLeft)}</p>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={() => setIsActive(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Start
                </button>
                <button
                    onClick={() => setIsActive(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Stop
                </button>
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Pomodoro