import React, { useState } from 'react'

const FeedbackForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name || !email || !message) {
            setError('All fields are required.')
            return
        }
        console.log({ name, email, message })
        setError('')
        alert('Feedback submitted successfully!')
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
        </form>
    )
}

export default FeedbackForm