import React, { useEffect, useState } from 'react';
import FlipUnit from './FlipUnit'

const getTimeLeft = (target) => {
    const total = Date.parse(target) - Date.now()
    const seconds = Math.max(0, Math.floor((total / 1000) % 60))
    const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60))
    const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24))
    const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)))
    return { total, days, hours, minutes, seconds }
}

const pad = (num) => String(num).padStart(2, '0')

const Countdown = ({ targetDate }) => {
    const [time, setTime] = useState(getTimeLeft(targetDate))
    const [prevTime, setPrevTime] = useState(time)

    useEffect(() => {
        const timer = setInterval(() => {
            const newTime = getTimeLeft(targetDate)
            setPrevTime(time)
            setTime(newTime)
            if (newTime.total <= 0) clearInterval(timer)
        }, 1000)
        return () => clearInterval(timer)
    }, [time, targetDate])

    const units = [
        ['days', pad(time.days), pad(prevTime.days)],
        ['hours', pad(time.hours), pad(prevTime.hours)],
        ['minutes', pad(time.minutes), pad(prevTime.minutes)],
        ['seconds', pad(time.seconds), pad(prevTime.seconds)],
    ]

    return (
        <div className="flex flex-wrap justify-center gap-6 mt-10">
            {units.map(([label, current, previous]) => (
                <div key={label} className="flex">
                    <FlipUnit digit={current[0]} previousDigit={previous[0]} label={label} />
                    <FlipUnit digit={current[1]} previousDigit={previous[1]} label={label} />
                </div>
            ))}
        </div>
    )
}

export default Countdown