import React, { useState } from 'react'
import { useHabits } from '../context/HabitContext'

const GoalForm = () => {
    const { addHabit } = useHabits()
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name && goal) {
            addHabit({ id: Date.now(), name, goal, completed: false })
            setName('')
            setGoal('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-dark">Add a New Habit</h2>
            <input
                type="text"
                placeholder="Habit Name (e.g., Exercise)"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
                type="text"
                placeholder="Goal (e.g., 5 times a week)"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <button
                type="submit"
                className="w-full py-3 mt-4 bg-primary text-white rounded-lg hover:bg-green-500 transition-all"
            >
                Add Habit
            </button>
        </form>
    )
}

export default GoalForm