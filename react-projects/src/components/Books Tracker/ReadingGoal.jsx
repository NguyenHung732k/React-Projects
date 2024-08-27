import React, { useState, useContext } from 'react'
import { BookContext } from './contexts/BookContext'

const ReadingGoal = () => {
    const { books } = useContext(BookContext)
    const [goal, setGoal] = useState('')

    const totalPagesRead = books.reduce((total, book) => total + book.pages, 0)

    return (
        <div className="p-4 border border-gray-300 rounded">
            <input
                type="number"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                placeholder="Set your reading goal"
                className="p-2 border border-gray-300 rounded"
            />
            <p className="mt-2">Pages Read: {totalPagesRead}</p>
            <p>Goal: {goal}</p>
            <p>Status: {totalPagesRead >= goal ? 'Goal Achieved!' : 'Keep Reading!'}</p>
        </div>
    )
}

export default ReadingGoal