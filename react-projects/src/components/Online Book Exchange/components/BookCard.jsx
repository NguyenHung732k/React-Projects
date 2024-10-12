import React from 'react'

const BookCard = ({ book }) => (
    <div className="border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4 m-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Request Exchange
        </button>
    </div>
)

export default BookCard