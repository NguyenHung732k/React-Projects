import React, { useState, useContext } from 'react'
import { BookContext } from './contexts/BookContext'

const AddBookForm = () => {
    const { books, setBooks } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newBook = { title, author, pages: parseInt(pages), startDate: new Date() }
        setBooks([...books, newBook])
        setTitle('')
        setAuthor('')
        setPages('')
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center items-center gap-4">
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="p-2 border border-gray-300 rounded" />
            <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Author" className="p-2 border border-gray-300 rounded" />
            <input type="number" value={pages} onChange={(event) => setPages(event.target.value)} placeholder="Pages" className="p-2 border border-gray-300 rounded" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Book</button>
        </form>
    )
}

export default AddBookForm