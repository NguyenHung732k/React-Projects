import React, { useState } from 'react'

const ExchangeForm = ({ addBook }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addBook({ title, author })
        setSuccessMessage(`Added "${title}" by ${author} successfully!`)
        setTitle('')
        setAuthor('')

        // Clear success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage('')
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-50 rounded-lg shadow-md my-4">
            {successMessage && <div className="text-green-500 mb-2">{successMessage}</div>}
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Book Title"
                className="border p-2 mr-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                placeholder="Author"
                className="border p-2 mr-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Add Book</button>
        </form>
    )
}

export default ExchangeForm