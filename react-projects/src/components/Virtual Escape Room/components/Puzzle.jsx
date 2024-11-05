import { useState } from 'react'

const Puzzle = ({ answer, onPuzzleSolved }) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input === answer) {
            onPuzzleSolved()
        } else {
            setError(true)
            setTimeout(() => setError(false), 1000)
        }
    }

    return (
        <div className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">Solve the Puzzle</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    className={`w-full p-3 border-2 rounded-lg text-xl ${error ? 'border-red-500' : 'border-gray-300'}`}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Enter your answer"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg transition duration-300 hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
            {error && <p className="text-red-500 text-center">Incorrect, try again!</p>}
        </div>
    )
}

export default Puzzle