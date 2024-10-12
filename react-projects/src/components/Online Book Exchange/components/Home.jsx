import React from 'react'
import BookCard from './BookCard'

const Home = ({ books }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold my-4 p-4">Available Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))
                ) : (
                    <p className="text-gray-500">No books available for exchange.</p>
                )}
            </div>
        </div>
    )
}

export default Home