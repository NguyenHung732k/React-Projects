import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../features/books/booksSlice'

const BookForm = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        if (title && author) {
            dispatch(addBook(title, author))
            setTitle('')
            setAuthor('')
        }
    }


    return (
        <form
            className="w-2/6 mx-auto"
            onSubmit={handleSubmit}
        >
            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="block py-2 px-0 w-full text-xl text-gray-900 bg-transparent border-b-2 border-gray-300 outline-none"
                    placeholder="Book Title"
                    required
                />
            </div>

            <div className="relative z-0 w-full mb-5 group">
                <input
                    type="text"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    className="block py-2 px-0 w-full text-xl text-gray-900 bg-transparent border-b-2 border-gray-300 outline-none"
                    placeholder="Book Author"
                />
            </div>

            <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2"
            >Add Book</button>
        </form>
    )
}

export default BookForm