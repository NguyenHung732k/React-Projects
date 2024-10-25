import React, { useState } from 'react'

const GuestbookForm = ({ addEntry }) => {
    const [message, setMessage] = useState('')
    const [file, setFile] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!message) return
        addEntry({ message, file })
        setMessage('')
        setFile(null)
    };

    return (
        <form onSubmit={handleSubmit} className="w-3/6 bg-white p-6 rounded-lg shadow-lg mb-8">
            <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="What would you like to say to the couple?"
                className="w-full p-4 border rounded-md mb-8 shadow-sm"
            />
            <div className="w-full flex justify-between items-center">
                <input
                    type="file"
                    onChange={(event) => setFile(event.target.files[0])}
                    accept="image/*,video/*"
                    className="mb-2 border rounded-md shadow-sm"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default GuestbookForm