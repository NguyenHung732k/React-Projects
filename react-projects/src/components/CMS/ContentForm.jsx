import React, { useEffect, useState } from 'react'

const ContentForm = ({ currentContent, onSave, onCancel }) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        if (currentContent) {
            setTitle(currentContent.title)
            setBody(currentContent.body)
        }
    }, [currentContent])

    const handleSubmit = (event) => {
        event.preventDefault()
        onSave({ title, body })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 rounded shadow-lg"
        >
            <h2 className="text-xl font-bold mb-4">{currentContent ? 'Edit Content' : 'Add New Content'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="4"
                    required
                ></textarea>
            </div>
            <div className="flex space-x-4">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default ContentForm