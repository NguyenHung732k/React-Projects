import React, { useState } from 'react'

const BookmarkForm = ({ addBookmark }) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!title || !url) {
            setError('Both fields are required!')
            return
        }
        addBookmark({ title, url })
        setTitle('')
        setUrl('')
        setError('')
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">Add a Bookmark</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Bookmark Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Bookmark URL"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
                    Add Bookmark
                </button>
            </form>
        </div>
    )
}

export default BookmarkForm