import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'

const BookList = ({ mood }) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    const moodKeywords = {
        Happy: 'joy',
        Sad: 'sorrow',
        Anxious: 'anxiety',
        Angry: 'anger',
        Relaxed: 'calm',
    }

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true)
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${moodKeywords[mood]}&maxResults=10`)
            const data = await response.json()
            setBooks(data.items || [])
            setLoading(false)
        }

        fetchBooks()
    }, [mood])

    const filteredBooks = books.filter(book =>
        book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) return <p className="text-center">Loading...</p>

    return (
        <div>
            <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="border p-2 rounded-lg shadow-md mb-4 w-full md:w-1/3"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.volumeInfo.title}
                        image={book.volumeInfo.imageLinks?.thumbnail}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookList