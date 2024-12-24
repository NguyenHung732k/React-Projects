import React from 'react'
import { useHabits } from '../context/HabitContext'

const StreakCounter = () => {
    const { streak, points } = useHabits()

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all mb-4 text-center">
            <h2 className="text-3xl font-semibold text-dark mb-2">Your Streak</h2>
            <p className="text-4xl font-bold text-accent">{streak} Days</p>
            <p className="text-lg text-gray-600">Keep going! 🌟</p>

            <h2 className="text-2xl font-semibold text-dark mt-4">Your Points</h2>
            <p className="text-3xl font-bold text-primary">{points} Points</p>
        </div>
    )
}

export default StreakCounter