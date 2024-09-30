import React from 'react'

const Flashcard = ({ flashcard, onFlip }) => {
    return (
        <div className="flashcard-container" onClick={onFlip}>
            <div className={`flashcard ${flashcard.isFlipped ? 'flip' : ''} bg-white p-4 rounded-lg shadow-md`}>
                <div className="front">
                    <h3 className="text-xl font-bold">{flashcard.question}</h3>
                    <p className="text-gray-500">{flashcard.category}</p>
                </div>
                <div className="back">
                    <p className="mt-2 pl-8 text-ellipsis overflow-hidden text-gray-700">{flashcard.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard