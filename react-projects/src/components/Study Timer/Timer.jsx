import React, { useState, useEffect } from 'react'

const Timer = ({ studyTime, breakTime }) => {
    const [timeLeft, setTimeLeft] = useState(studyTime * 60)
    const [isWorking, setIsWorking] = useState(true)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        setTimeLeft(studyTime * 60)
    }, [studyTime, breakTime])

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        if (timeLeft <= 0) {
            setIsWorking((prev) => !prev)
            setTimeLeft(isWorking ? breakTime * 60 : studyTime * 60)
        }

        return () => clearInterval(interval)
    }, [isRunning, timeLeft, isWorking, studyTime, breakTime])

    const toggleTimer = () => {
        setIsRunning((prev) => !prev)
    }

    const resetTimer = () => {
        setTimeLeft(studyTime * 60)
        setIsRunning(false)
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    return (
        <div className="timer-container bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-white text-center mb-4">
                {isWorking ? 'Study Time' : 'Break Time'}
            </h2>
            <div className="timer-display text-5xl text-white font-bold text-center mb-6">
                {formatTime(timeLeft)}
            </div>
            <div className="flex justify-center gap-6">
                <button
                    onClick={toggleTimer}
                    className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all duration-300"
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button
                    onClick={resetTimer}
                    className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-all duration-300"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer