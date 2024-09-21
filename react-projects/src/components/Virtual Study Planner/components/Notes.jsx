import React, { useState } from 'react'
import { useStudy } from '../context/StudyContext'

const Notes = () => {
    const { notes, setNotes } = useStudy()
    const [currentNote, setCurrentNote] = useState('')
    const [noteTitle, setNoteTitle] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const handleAddNote = () => {
        if (noteTitle && currentNote) {
            setNotes([...notes, { title: noteTitle, content: currentNote }])
            setCurrentNote('')
            setNoteTitle('')
        }
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Notes</h1>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-semibold">Add New Note</h2>
                <input
                    type="text"
                    placeholder="Note Title"
                    value={noteTitle}
                    onChange={(event) => setNoteTitle(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <textarea
                    placeholder="Write your note here..."
                    value={currentNote}
                    onChange={(event) => setCurrentNote(event.target.value)}
                    className="w-full p-2 mb-2 border border-gray-300 rounded h-40"
                />
                <button
                    onClick={handleAddNote}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Add Note
                </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
                <h2 className="text-lg font-semibold">Search Notes</h2>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <div className="space-y-4">
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map((note, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded">
                                <h3 className="text-lg font-semibold">{note.title}</h3>
                                <p>{note.content}</p>
                            </div>
                        ))
                    ) : (
                        <p>No notes found</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Notes