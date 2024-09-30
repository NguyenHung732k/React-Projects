import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards, flipFlashcard }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {flashcards.map((flashcard, index) => (
                <Flashcard
                    key={index}
                    flashcard={flashcard}
                    onFlip={() => flipFlashcard(index)}
                />
            ))}
        </div>
    )
}

export default FlashcardList