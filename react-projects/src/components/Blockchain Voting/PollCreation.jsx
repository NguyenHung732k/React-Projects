import React, { useState } from 'react';

const PollCreation = ({ onPollCreated }) => {
    const [title, setTitle] = useState('')
    const [votingMode, setVotingMode] = useState('single')
    const [candidates, setCandidates] = useState([''])

    const handleSubmit = (event) => {
        event.preventDefault()
        onPollCreated({ title, votingMode, candidates })
    }

    const handleCandidateChange = (index, value) => {
        const updatedCandidates = [...candidates]
        updatedCandidates[index] = value
        setCandidates(updatedCandidates)
    }

    const addCandidate = () => setCandidates([...candidates, ''])
    const removeCandidate = (index) => {
        const updatedCandidates = candidates.filter((_, idx) => idx !== index)
        setCandidates(updatedCandidates)
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Create a New Poll</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Poll Title</label>
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Enter poll title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Voting Mode</label>
                    <select
                        className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                        value={votingMode}
                        onChange={(event) => setVotingMode(event.target.value)}
                    >
                        <option value="single">Single Choice</option>
                        <option value="multiple">Multiple Choice</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Candidates</label>
                    <div className="space-y-2">
                        {candidates.map((candidate, index) => (
                            <div key={index} className="flex space-x-2">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded-md"
                                    value={candidate}
                                    onChange={(event) => handleCandidateChange(index, event.target.value)}
                                    placeholder={`Candidate ${index + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeCandidate(index)}
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addCandidate}
                            className="text-blue-500 mt-2"
                        >
                            + Add Candidate
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white p-3 w-full rounded-lg hover:bg-green-700 transition"
                >
                    Create Poll
                </button>
            </form>
        </div>
    )
}

export default PollCreation