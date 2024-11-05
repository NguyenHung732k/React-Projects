import { useState, useEffect } from 'react'

const Timer = ({ onTimeUp }) => {
    const [time, setTime] = useState(600) // 10 minutes timer (600 seconds)

    useEffect(() => {
        if (time <= 0) {
            onTimeUp()
            return
        }
        const timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000)
        return () => clearInterval(timer)
    }, [time, onTimeUp])

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    return (
        <div className="text-xl font-bold">
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    )
}

export default Timer