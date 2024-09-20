import React, { createContext, useState } from 'react'

const NoteContext = createContext()

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)

    return (
        <NoteContext.Provider value={{ notes, setNotes, selectedNote, setSelectedNote }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContext