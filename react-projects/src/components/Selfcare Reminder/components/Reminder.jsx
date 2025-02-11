import React, { useEffect, useState } from "react"

const Reminder = () => {
    const [hydrationReminder, setHydrationReminder] = useState(false)
    const [exerciseReminder, setExerciseReminder] = useState(false)
    const [meditationReminder, setMeditationReminder] = useState(false)

    useEffect(() => {
        const hydrationTimer = setInterval(() => {
            setHydrationReminder(true)
            setTimeout(() => setHydrationReminder(false), 3000)
        }, 3600000)

        const exerciseTimer = setInterval(() => {
            setExerciseReminder(true)
            setTimeout(() => setExerciseReminder(false), 3000)
        }, 7200000)

        const meditationTimer = setInterval(() => {
            setMeditationReminder(true)
            setTimeout(() => setMeditationReminder(false), 3000)
        }, 14400000)

        return () => {
            clearInterval(hydrationTimer)
            clearInterval(exerciseTimer)
            clearInterval(meditationTimer)
        }
    }, [])

    return (
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 transition-all">
            <h2 className="text-2xl text-gray-700 font-medium mb-4">Self-Care Reminders</h2>
            <ul>
                <li
                    className={`p-4 rounded-xl mb-2 shadow-md ${hydrationReminder ? "bg-blue-100" : "bg-white"} hover:bg-blue-50 cursor-pointer transition-all`}>
                    Hydration Reminder
                </li>
                <li
                    className={`p-4 rounded-xl mb-2 shadow-md ${exerciseReminder ? "bg-green-100" : "bg-white"} hover:bg-green-50 cursor-pointer transition-all`}>
                    Exercise Reminder
                </li>
                <li
                    className={`p-4 rounded-xl mb-2 shadow-md ${meditationReminder ? "bg-yellow-100" : "bg-white"} hover:bg-yellow-50 cursor-pointer transition-all`}>
                    Meditation Reminder
                </li>
            </ul>
        </div>
    )
}

export default Reminder