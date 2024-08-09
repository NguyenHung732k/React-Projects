import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const FlashCardList = ({ flashcards, deleteFlashcard }) => {
  const [showAnswer, setShowAnswer] = useState(null)

  const handleToggleAnswer = (index) => {
    setShowAnswer(showAnswer === index ? null : index)
  }


  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mb-4">
        <Link to="/add" className="px-4 py-2 bg-blue-500 text-white rounded-md text-decoration-none">Add Flashcard</Link>
      </div>
      {flashcards.map((flashcard, index) => (
        <div key={index} className="w-2/6 mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
          <div className="text-lg font-semibold">{flashcard.question}</div>
          {showAnswer === index && (
            <div className="mt-2 text-gray-700">{flashcard.answer}</div>
          )}
          <button
            onClick={() => handleToggleAnswer(index)}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            {showAnswer === index ? 'Hide Answer' : 'Show Answer'}
          </button>
          <button
            onClick={() => deleteFlashcard(index)}
            className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default FlashCardList