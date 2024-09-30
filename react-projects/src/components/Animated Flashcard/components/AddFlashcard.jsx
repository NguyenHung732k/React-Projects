import React, { useState } from 'react'

const AddFlashcard = ({ addFlashcard }) => {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addFlashcard({ question, answer, category, isFlipped: false })
        setQuestion('')
        setAnswer('')
        setCategory('')
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Add Flashcard</h2>
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className="w-full mb-2 border border-gray-300 p-2 rounded"
                required
            />
            <input
                type="text"
                placeholder="Answer"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                className="w-full mb-2 border border-gray-300 p-2 rounded"
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full mb-2 border border-gray-300 p-2 rounded"
                required
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500">
                Add Flashcard
            </button>
        </form>
    )
}

export default AddFlashcard