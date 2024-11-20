import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePoll = ({ setPolls }) => {
    const navigate = useNavigate()

    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState(['', ''])

    const handleCreatePoll = () => {
        if (question.trim() === '' || options.some((option) => option.trim() === '')) return

        const newPoll = {
            id: Date.now().toString(),
            question,
            options: options.map((option) => ({ text: option, votes: 0 })),
        }

        setPolls((prevPolls) => {
            const updatedPolls = [...prevPolls, newPoll]
            return updatedPolls;
        })

        // Navigate to the newly created poll using the route '/poll/:id'
        navigate(`/poll/${newPoll.id}`)
    }

    const handleAddOption = () => {
        setOptions([...options, ''])
    }

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options]
        updatedOptions[index] = value
        setOptions(updatedOptions)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Create a Poll</h2>
            <input
                type="text"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Poll Question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
            />

            {options.map((option, index) => (
                <div key={index} className="mb-3">
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(event) => handleOptionChange(index, event.target.value)}
                    />
                </div>
            ))}

            <button
                className="text-blue-600 mt-2"
                onClick={handleAddOption}
            >
                Add Another Option
            </button>

            <button
                className="mt-4 w-full p-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleCreatePoll}
            >
                Create Poll
            </button>
        </div>
    )
}

export default CreatePoll