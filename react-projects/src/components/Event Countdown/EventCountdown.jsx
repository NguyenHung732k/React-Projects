import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import EventCard from './EventCard'

const EventCountdown = () => {

    const [timer, setTimer] = useState([])
    const [title, setTitle] = useState("")
    const [calendar, setCalendar] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())

    useEffect(() => {
        const intervalTimer = {}

        const updateTimer = () => {

            setTimer((prevTimer) => prevTimer.map((time) => {
                const targetTime = new Date(time.targetDateTime).getTime()
                const currentTime = new Date().getTime()
                const timeRemaining = Math.max(Math.floor((targetTime - currentTime) / 1000), 0)

                if (timeRemaining === 0) {
                    clearInterval(intervalTimer[time.id])
                    return { ...time, isRunning: false, timeRemaining: 0 }
                }

                return { ...time, timeRemaining }
            })
            )
        }

        timer.forEach((timer) => {
            if (timer.isRunning && timer.timeRemaining > 0) {
                intervalTimer[timer.id] = setInterval(updateTimer, 1000)
            }
        })

        return () => {
            Object.values(intervalTimer).forEach((intervalTimer) =>
                clearInterval(intervalTimer)
            )
        }

    }, [timer])

    const removeTimer = (timerId) => {
        setTimer((prevTimer) => prevTimer.filter((timer) => timer.id !== timerId))
    }

    const calculateTimeRemaining = (targetTime) => {
        const currentTime = new Date().getTime()
        const timeDifference = targetTime - currentTime
        const secondsRemaining = Math.max(Math.floor(timeDifference / 1000), 0)
        return secondsRemaining
    }

    const formatTimeRemaining = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24))
        const hours = Math.floor((seconds % (3600 * 24)) / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        return {
            days, hours, minutes, seconds: remainingSeconds,
        }
    }

    const addTimer = () => {
        if (!title || !calendar) return

        const targetDateTime = new Date(calendar).getTime()

        const newTimer = {
            id: timer.length + 1,
            targetDateTime,
            timeRemaining: calculateTimeRemaining(targetDateTime),
            isRunning: true,
            title: title,
            showTitle: false,
        }

        setTimer([...timer, newTimer])

        setTitle("")
        setCalendar(`${startDate}`)
    }


    const handleSubmit = (event) => {
        event.preventDefault()


    }


    return (
        <div className="w-screen h-screen flex flex-col justify-evenly items-center p-8">
            <div className="flex flex-col justify-center items-center w-[500px] h-80 mb-8 gap-4 border border-solid border-gray rounded-lg bg-white/45 backdrop-blur-xl">
                <h1> Event Countdown </h1>

                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5" placeholder="Title" required
                />

                <DatePicker
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
                    placeholder={startDate}
                    required selected={calendar}
                    onChange={(date) => setCalendar(date)}
                />

                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm mb-4 px-5 py-2.5"
                    type="submit"
                    onClick={addTimer}
                    disabled={!title || !calendar}
                >
                    Add Timer
                </button>
            </div>


            <div className="flex justify-center items-center gap-4 flex-wrap">
                {timer.map((timer, index) => {
                    const timeRemaining = formatTimeRemaining(timer.timeRemaining)

                    return (
                        <div className="flex flex-col justify-center items-center w-[500px] h-80 border border-solid border-gray rounded-lg bg-white/45 backdrop-blur-xl">
                            <EventCard key={index} title={timer.title} timeRemaining={timeRemaining} />
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm mb-4 px-5 py-2.5"
                                onClick={() => removeTimer(timer.id)}
                                disabled={timer.timeRemaining <= 0}
                            >
                                Remove
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EventCountdown