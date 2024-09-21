import React, { useState } from 'react'
import { useStudy } from '../context/StudyContext'

const Goals = () => {
    const { goals, setGoals, progress, setProgress } = useStudy()
    const [goalDescription, setGoalDescription] = useState('')
    const [goalDate, setGoalDate] = useState('')

    const handleAddGoal = () => {
        if (goalDescription && goalDate) {
            const newGoals = [...goals, { description: goalDescription, date: goalDate, completed: false }]
            setGoals(newGoals)
            setGoalDescription('')
            setGoalDate('')

            setProgress({
                ...progress,
                totalGoals: newGoals.length,
                completedGoals: newGoals.filter(goal => goal.completed).length
            })
        }
    }

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Your Goals</h1>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold">Add New Goal</h2>
                <input
                    type="text"
                    placeholder="Goal Description"
                    value={goalDescription}
                    onChange={(event) => setGoalDescription(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    value={goalDate}
                    onChange={(event) => setGoalDate(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddGoal}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Add Goal
                </button>
            </div>
            <div className="space-y-4 mt-6">
                {goals.map((goal, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold">{goal.description}</h3>
                        <p>Due: {goal.date}</p>
                        <p>Status: {goal.completed ? 'Completed' : 'Pending'}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Goals