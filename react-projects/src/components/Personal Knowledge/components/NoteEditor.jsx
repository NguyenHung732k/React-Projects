import React, { useState, useEffect } from 'react'

const NoteEditor = ({ note, onSave }) => {
    const [content, setContent] = useState(note ? note.content : '')

    useEffect(() => {
        setContent(note ? note.content : '')
    }, [note])

    const handleChange = (event) => {
        setContent(event.target.value)
    };

    const handleSave = () => {
        if (typeof onSave === 'function') {
            onSave(content)
            setContent("")
        } else {
            console.error('onSave is not a function')
        }
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <textarea
                value={content}
                onChange={handleChange}
                className="w-full h-96 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Start writing your note..."
            />
            <button
                onClick={handleSave}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Save
            </button>
        </div>
    )
}

export default NoteEditor