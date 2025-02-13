import React, { useState, useEffect } from 'react'

const VotingInterface = ({ candidates, onVote }) => {
    const [voteCount, setVoteCount] = useState({})

    useEffect(() => {
        // Update the vote count in real-time from blockchain
        const fetchVoteCounts = async () => {
            // Simulating a fetch call
            const counts = candidates.reduce((acc, candidate) => {
                acc[candidate.id] = Math.floor(Math.random() * 100) // Simulated vote count
                return acc
            }, {})
            setVoteCount(counts)
        }
        fetchVoteCounts()
    }, [candidates])

    return (
        <div className="p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Choose Your Candidate</h2>
            <div className="space-y-4">
                {candidates.map((candidate) => (
                    <div
                        key={candidate.id}
                        className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition"
                        onClick={() => onVote(candidate.id)}
                    >
                        <div className="flex justify-between">
                            <p className="text-lg font-medium">{candidate.name}</p>
                            <span className="text-sm text-gray-500">{voteCount[candidate.id] || 0} Votes</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VotingInterface