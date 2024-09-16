import { useState } from 'react'

const PollForm = ({ onAddPoll }) => {
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([''])
    const [error, setError] = useState('')

    const handleAddOption = () => {
        setOptions([...options, ''])
    }

    const handleOptionChange = (index, value) => {
        const newOptions = [...options]
        newOptions[index] = value
        setOptions(newOptions)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (question.trim() === '' || options.some(option => option.trim() === '')) {
            setError('Please fill out all fields.')
            return
        }
        setError('')
        onAddPoll({ question, options })
        setQuestion('')
        setOptions([''])
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Create a Poll</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter your poll question"
                    value={question}
                    onChange={(event) => setQuestion(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(event) => handleOptionChange(index, event.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}
                <button
                    type="button"
                    onClick={handleAddOption}
                    className="text-blue-500 pl-2"
                >
                    Add Another Option
                </button>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Poll
                </button>
            </form>
        </div>
    )
}

export default PollForm