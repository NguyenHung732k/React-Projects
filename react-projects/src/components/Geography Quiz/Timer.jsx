import React, { useState, useEffect } from 'react'

const Timer = ({ endQuiz }) => {
    const [time, setTime] = useState(60)

    useEffect(() => {
        if (time <= 0) {
            endQuiz()
            return
        }
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [time, endQuiz])

    return (
        <div className="text-center mb-6">
            <p className="text-2xl font-semibold">
                Time Remaining: <span className="text-yellow-400">{time}s</span>
            </p>
            <div className="w-3/4 mx-auto mt-4 bg-gray-300 h-4 rounded-full">
                <div
                    className="bg-yellow-500 h-4 rounded-full"
                    style={{ width: `${(time / 60) * 100}%` }}
                />
            </div>
        </div>
    )
}

export default Timer