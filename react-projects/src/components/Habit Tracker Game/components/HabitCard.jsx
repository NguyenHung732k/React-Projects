import React from 'react'
import { useHabits } from '../context/HabitContext'

const HabitCard = ({ habit }) => {
    const { completeHabit } = useHabits()

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all mb-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold text-lg text-dark">{habit.name}</h3>
                    <p className="text-sm text-gray-600">{habit.goal}</p>
                </div>
                <div className="flex items-center">
                    <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${habit.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                    >
                        {habit.completed ? 'Completed' : 'Not Done'}
                    </span>
                </div>
            </div>
            <button
                className={`w-full py-2 mt-2 text-white rounded-lg ${habit.completed ? 'bg-gray-300' : 'bg-primary hover:bg-green-500'
                    } transition-all`}
                onClick={() => completeHabit(habit.id)}
                disabled={habit.completed}
            >
                {habit.completed ? 'Done for Today' : 'Mark as Done'}
            </button>
        </div>
    )
}

export default HabitCard