import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FlashCardForm = ({ addFlashcard }) => {

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    addFlashcard({ question, answer })
    navigate('/')
  }

  return (
    <div className="w-2/6 mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <Link to="/" className="flex justify-start items-center text-blue-500 text-black underline mb-4 inline-block text-decoration-none">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
        Back to List
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-700 mb-1" htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="answer">Answer</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Flashcard</button>
      </form>
    </div>
  )
}

export default FlashCardForm