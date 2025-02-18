import React, { useState } from 'react'

const HabitTracker = () => {
    const [habits, setHabits] = useState([
        { id: '1', name: 'Drink Water', done: false },
        { id: '2', name: 'Exercise', done: false },
        { id: '3', name: 'Read', done: false },
    ])

    const handleToggle = (id) => {
        setHabits(habits.map(habit =>
            habit.id === id ? { ...habit, done: !habit.done } : habit
        ))
    }

    return (
        <div className="space-y-4">
            {habits.map((habit) => (
                <div key={habit.id} className="flex items-center space-x-4">
                    <input
                        type="checkbox"
                        checked={habit.done}
                        onChange={() => handleToggle(habit.id)}
                        className="w-6 h-6 accent-green-500"
                    />
                    <span className={`text-lg font-medium ${habit.done ? 'text-green-500' : 'text-gray-700'}`}>
                        {habit.name}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default HabitTracker