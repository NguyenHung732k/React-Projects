import React, { useState } from 'react'
import Milestone from './Milestone'

const GoalContainer = () => {
    const [goal, setGoal] = useState({
        name: "Learn Web Development",
        milestones: [
            { id: 1, name: "HTML Basics", completed: 50, deadline: "2025-02-01", resources: [] },
            { id: 2, name: "CSS Styling", completed: 25, deadline: "2025-02-15", resources: [] },
            { id: 3, name: "React.js Basics", completed: 10, deadline: "2025-03-01", resources: [] },
        ],
    })

    const calculateTotalProgress = () => {
        const total = goal.milestones.reduce((sum, milestone) => sum + milestone.completed, 0);
        const totalProgress = total / goal.milestones.length;
        return totalProgress.toFixed(2)
    }

    const handleToggleCompletion = (id, newCompletionStatus) => {
        const updatedMilestones = goal.milestones.map((milestone) =>
            milestone.id === id
                ? { ...milestone, completed: newCompletionStatus }
                : milestone
        )

        setGoal((prevGoal) => ({
            ...prevGoal,
            milestones: updatedMilestones,
        }))
    }

    const [newMilestone, setNewMilestone] = useState({ name: '', deadline: '', completed: 0 })

    const handleAddMilestone = () => {
        setGoal((prevGoal) => ({
            ...prevGoal,
            milestones: [
                ...prevGoal.milestones,
                { ...newMilestone, id: Date.now(), resources: [] },
            ],
        }))
        setNewMilestone({ name: '', deadline: '', completed: 0 })
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{goal.name}</h2>

            <div className="mb-6 flex jusity-center items-center gap-2">
                <input
                    type="text"
                    placeholder="Milestone Name"
                    className="p-2 border rounded"
                    value={newMilestone.name}
                    onChange={(event) => setNewMilestone({ ...newMilestone, name: event.target.value })}
                />
                <input
                    type="date"
                    className="p-2 border rounded"
                    value={newMilestone.deadline}
                    onChange={(event) => setNewMilestone({ ...newMilestone, deadline: event.target.value })}
                />
                <button
                    onClick={handleAddMilestone}
                    className="py-2 px-4 bg-blue-500 text-white rounded-full"
                >
                    Add Milestone
                </button>
            </div>

            <div className="mb-6">
                <h3 className="text-xl text-gray-700">Total Progress: {calculateTotalProgress()}%</h3>
            </div>

            {goal.milestones.map((milestone) => (
                <Milestone
                    key={milestone.id}
                    milestone={milestone}
                    onToggleCompletion={handleToggleCompletion}
                />
            ))}
        </div>
    )
}

export default GoalContainer