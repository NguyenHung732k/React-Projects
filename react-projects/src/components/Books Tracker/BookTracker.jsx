import React from 'react'
import { BookProvider } from './contexts/BookContext'
import AddBookForm from './AddBookForm'
import ReadingGoal from './ReadingGoal'
import ReadingStats from './ReadingStats'


const BookTracker = () => {
    return (
        <BookProvider>
            <div className="flex flex-col justify-center items-center mx-auto p-4 gap-4">
                <h1 className="text-2xl font-bold mb-4">Personal Book Tracker</h1>
                <AddBookForm />
                <ReadingGoal />
                <ReadingStats />
            </div>
        </BookProvider>
    )
}

export default BookTracker