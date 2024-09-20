import React from 'react'

const NoteList = ({ notes, onSelectNote }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <h2 className="text-xl font-bold mb-4">Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note.id} className="mb-2">
                        <button
                            onClick={() => onSelectNote(note)}
                            className="text-primary hover:underline"
                        >
                            {note.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NoteList