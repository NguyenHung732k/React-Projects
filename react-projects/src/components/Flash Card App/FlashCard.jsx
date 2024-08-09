import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import FlashCardList from './FlashCardList'
import FlashCardForm from './FlashCardForm'

const FlashCard = () => {


  const [flashcards, setFlashcards] = useState([])

  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard])
  }

  const deleteFlashcard = (index) => {
    setFlashcards(flashcards.filter((_, i) => i !== index))
  }




  return (
    <Router>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Flashcard App</h1>
        <Routes>
          <Route path="/" element={<FlashCardList flashcards={flashcards} deleteFlashcard={deleteFlashcard} />} />
          <Route path="/add" element={<FlashCardForm addFlashcard={addFlashcard} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default FlashCard