import React, { useState, useEffect } from 'react'
import AddFlashcard from './components/AddFlashcard'
import FlashcardList from './components/FlashcardList'
import './FlashcardStyles.css'

const FlashcardApp = () => {
    const [flashcards, setFlashcards] = useState([])

    useEffect(() => {
        const storedFlashcards = JSON.parse(localStorage.getItem('flashcards'))
        if (storedFlashcards) {
            setFlashcards(storedFlashcards)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards))
    }, [flashcards])

    const addFlashcard = (flashcard) => {
        setFlashcards([...flashcards, flashcard])
    }

    const flipFlashcard = (index) => {
        const newFlashcards = [...flashcards]
        newFlashcards[index].isFlipped = !newFlashcards[index].isFlipped
        setFlashcards(newFlashcards)
    }

    return (
        <div className="container mx-auto p-4">
            <AddFlashcard addFlashcard={addFlashcard} />
            <FlashcardList flashcards={flashcards} flipFlashcard={flipFlashcard} />
        </div>
    )
}

export default FlashcardApp