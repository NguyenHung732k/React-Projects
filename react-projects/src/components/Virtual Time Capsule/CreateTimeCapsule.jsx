import React, { useState } from 'react';

const CreateTimeCapsule = ({ onSubmit }) => {
    const [message, setMessage] = useState('')
    const [unlockDate, setUnlockDate] = useState('')
    const [media, setMedia] = useState(null)
    const [error, setError] = useState('')

    const handleMediaChange = (event) => {
        setMedia(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!message || !unlockDate) {
            setError('Please fill in all fields')
            return
        }

        const newCapsule = {
            message,
            unlockDate,
            media,
        }
        onSubmit(newCapsule)
        setMessage('')
        setUnlockDate('')
        setMedia(null)
        setError('')
    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Create Your Time Capsule</h2>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Write a heartfelt message..."
                        className="w-full p-4 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="unlock-date" className="block text-sm font-medium text-gray-700">Unlock Date</label>
                    <input
                        type="date"
                        id="unlock-date"
                        value={unlockDate}
                        onChange={(event) => setUnlockDate(event.target.value)}
                        className="w-full p-4 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="media-upload" className="block text-sm font-medium text-gray-700">Upload Media (optional)</label>
                    <input
                        type="file"
                        accept="image/*, video/*"
                        id="media-upload"
                        onChange={handleMediaChange}
                        className="mt-2 file:border-none file:bg-blue-500 file:text-white file:py-2 file:px-4 file:rounded-full file:cursor-pointer focus:outline-none"
                    />
                    {media && (
                        <div className="mt-4">
                            <p className="text-sm text-gray-500">Preview:</p>
                            {media.type.startsWith('image') ? (
                                <img src={URL.createObjectURL(media)} alt="Media preview" className="mt-2 rounded-xl shadow-lg w-full h-48 object-cover" />
                            ) : (
                                <video className="mt-2 rounded-xl w-full h-48 object-cover" controls>
                                    <source src={URL.createObjectURL(media)} type={media.type} />
                                </video>
                            )}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 focus:outline-none"
                >
                    Create Capsule
                </button>
            </form>
        </div>
    )
}

export default CreateTimeCapsule