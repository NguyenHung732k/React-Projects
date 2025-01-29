import React, { useState } from 'react'
import ProgressTracker from './ProgressTracker'
import AddResourceButton from './AddResourceButton'

const Milestone = ({ milestone, onToggleCompletion }) => {
    const [completed, setCompleted] = useState(milestone.completed)

    const handleCompletionToggle = () => {
        const newCompletionStatus = completed === 100 ? 0 : 100
        setCompleted(newCompletionStatus)
        onToggleCompletion(milestone.id, newCompletionStatus)
    }

    return (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{milestone.name}</h3>
                <div className="text-sm text-gray-500">{milestone.deadline}</div>
            </div>

            <ProgressTracker progress={completed} />

            <div className="mt-4">
                {milestone.resources.length > 0 ? (
                    <div>
                        <h4 className="text-lg font-medium text-gray-700">Resources:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {milestone.resources.map((resource, index) => (
                                <li key={index} className="text-sm text-gray-600">{resource}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="text-sm text-gray-500">No resources attached.</p>
                )}
            </div>

            <button
                onClick={handleCompletionToggle}
                className={`mt-4 py-2 px-4 rounded-full transition duration-200 ${completed === 100 ? 'bg-red-500' : 'bg-green-500'} text-white`}
            >
                {completed === 100 ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>

            <AddResourceButton onClick={() => alert("Add resource functionality here")} />
        </div>
    )
}

export default Milestone