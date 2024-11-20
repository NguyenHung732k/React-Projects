import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PollList = ({ poll, setPolls }) => {
    const navigate = useNavigate()
    const { id: pollId } = useParams()
    const [selectedOption, setSelectedOption] = useState(null)

    if (!poll) {
        return <div className="text-center text-lg text-gray-500">Poll not found.</div>
    }

    const totalVotes = poll.options ? poll.options.reduce((acc, option) => acc + option.votes, 0) : 0

    const handleVote = () => {
        if (selectedOption === null) return

        const updatedPoll = { ...poll }
        updatedPoll.options[selectedOption].votes += 1

        setPolls((prevPolls) => {
            const updatedPolls = prevPolls.map((p) => (p.id === poll.id ? updatedPoll : p))
            return updatedPolls
        })

        navigate(`/poll/${pollId}`)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">{poll.question}</h2>

            {poll.options && poll.options.length > 0 ? (
                poll.options.map((option, index) => (
                    <div key={index} className="mb-4 flex items-center space-x-4">
                        <input
                            type="radio"
                            name="voteOption"
                            value={index}
                            onChange={() => setSelectedOption(index)}
                            className="h-5 w-5 text-blue-500"
                        />
                        <label className="text-lg text-gray-800">{option.text}</label>

                        {totalVotes > 0 && (
                            <div className="flex-1 ml-4">
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600">
                                            {((option.votes / totalVotes) * 100).toFixed(0)}%
                                        </span>
                                    </div>
                                    <div className="flex mb-2">
                                        <div
                                            className="flex-1 bg-blue-200 rounded-full"
                                            style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                                        >
                                            <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="text-center text-lg text-gray-500">No options available for this poll.</div>
            )}

            <button
                className="mt-4 w-full p-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={handleVote}
            >
                Submit Vote
            </button>
        </div>
    )
}

export default PollList