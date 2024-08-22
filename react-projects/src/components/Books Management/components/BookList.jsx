import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeBook } from '../features/books/booksSlice'

const BookList = () => {

    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()

    return (
        <ul className="w-full flex flex-col justify-center items-center">
            {books.map((book) => (
                <div className="w-2/6 p-6 bg-white rounded-lg shadow-md">
                    <li className="w-full flex justify-between items-center" key={book.id}>
                        <h5>{book.title} - {book.author}</h5>
                        <button
                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-2 py-2 text-center"
                            onClick={() => dispatch(removeBook(book.id))}
                        >Remove</button>
                    </li>
                </div>
            ))}
        </ul>
    )
}

export default BookList