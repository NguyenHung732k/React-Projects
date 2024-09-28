import React, { useState, useEffect } from 'react'

const HabitTracker = () => {
    const [habit, setHabit] = useState('')
    const [habits, setHabits] = useState([])

    useEffect(() => {
        const storedHabits = JSON.parse(localStorage.getItem('habits'))
        if (storedHabits) {
            setHabits(storedHabits)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits))
    }, [habits])

    const handleAddHabit = () => {
        if (habit) {
            setHabits([...habits, { name: habit, completed: false }])
            setHabit('')
        }
    }

    const toggleHabitCompletion = (index) => {
        const updatedHabits = habits.map((habit, i) =>
            i === index ? { ...habit, completed: !habit.completed } : habit
        )
        setHabits(updatedHabits)
    };

    const deleteHabit = (index) => {
        const updatedHabits = habits.filter((_, i) => i !== index)
        setHabits(updatedHabits)
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Habit Tracker</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={habit}
                    onChange={(event) => setHabit(event.target.value)}
                    placeholder="Add a new habit"
                    className="border border-gray-300 rounded-l-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddHabit}
                    className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition"
                >
                    Add
                </button>
            </div>
            <ul className="space-y-3">
                {habits.map((habit, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md transition duration-300 hover:bg-gray-200">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={habit.completed}
                                onChange={() => toggleHabitCompletion(index)}
                                className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className={habit.completed ? 'line-through text-gray-500' : 'text-gray-800'}>{habit.name}</span>
                        </div>
                        <button
                            onClick={() => deleteHabit(index)}
                            className="bg-red-500 text-white rounded px-2 hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HabitTracker