import { useParams } from 'react-router-dom'
import { useState } from 'react'
import PollResults from '../components/PollResult'


const pollData = [
    {
        id: 1,
        question: "What is your favorite programming language?",
        options: ["JavaScript", "Python", "Java", "C++"],
        votes: [45, 30, 15, 10]
    }
]


const PollPage = () => {
    const { id } = useParams()
    const [polls, setPolls] = useState(pollData)
    const poll = polls.find(p => p.id === parseInt(id))

    const handleVote = (index) => {
        const updatedPolls = polls.map(p => {
            if (p.id === poll.id) {
                const newVotes = [...p.votes]
                newVotes[index]++
                return { ...p, votes: newVotes }
            }
            return p
        })
        setPolls(updatedPolls)
    }

    if (!poll) return <p className="text-center p-6">Poll not found</p>

    return (
        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">{poll.question}</h1>
            <div className="space-y-2">
                {poll.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleVote(index)}
                        className="w-5/6 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {option}
                    </button>
                ))}
            </div>
            <PollResults poll={poll} />
        </div>
    )
}

export default PollPage