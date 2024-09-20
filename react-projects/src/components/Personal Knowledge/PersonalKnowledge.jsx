import React, { useState } from 'react'
import NoteEditor from './components/NoteEditor'
import NoteList from './components/NoteList'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import { generateId } from './utils'

const PersonalKnowledge = () => {
    const [notes, setNotes] = useState([])
    const [currentNote, setCurrentNote] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState('')

    const handleSave = (content) => {
        if (currentNote) {
            setNotes(prevNotes =>
                prevNotes.map(note =>
                    note.id === currentNote.id ? { ...note, content } : note
                )
            )
        } else {
            setNotes(prevNotes =>
                [...prevNotes, { id: generateId(), title: `Note ${prevNotes.length + 1}`, content }]
            )
        }
        setCurrentNote(null)
    }

    const handleSelectNote = (note) => {
        setCurrentNote(note)
    }

    const handleSearch = (query) => {
        setSearchQuery(query)
    }

    const handleFilter = (tag) => {
        setSelectedTag(tag)
    }

    const filteredNotes = notes
        .filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(note => !selectedTag || note.tags?.includes(selectedTag))

    const tags = [...new Set(notes.flatMap(note => note.tags || []))]

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Personal Knowledge Base</h1>
            <div className="flex flex-col lg:flex-row gap-4">
                <NoteList notes={filteredNotes} onSelectNote={handleSelectNote} />
                <div className="flex-1">
                    <SearchBar onSearch={handleSearch} notes={notes} />
                    <FilterBar tags={tags} onFilter={handleFilter} />
                    <NoteEditor note={currentNote} onSave={handleSave} />
                </div>
            </div>
        </div>
    )
}

export default PersonalKnowledge