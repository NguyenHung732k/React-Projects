import React, { useState } from 'react'

const MovieForm = ({ addMovie }) => {

    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [notes, setNotes] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (title) {
            addMovie({
                id: Date.now(),
                title,
                rating: rating || "Not Rated",
                notes: notes || "Not rated",
                watched: false,
            })
            setTitle('')
            setRating('')
            setNotes('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col gap-4 mb-4">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Movie Title"
                    className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    placeholder="Rating"
                    className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Notes"
                    className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition-colors"
            >
                Add Movie
            </button>
        </form>
    )
}

export default MovieForm