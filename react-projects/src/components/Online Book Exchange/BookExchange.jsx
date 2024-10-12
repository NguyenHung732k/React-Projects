import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ExchangeForm from './components/ExchangeForm'

const BookExchange = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('books')) || []
        setBooks(savedBooks)
    }, [])

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    const addBook = (book) => {
        setBooks((prevBooks) => [...prevBooks, book])
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home books={books} />} />
                    <Route path="/exchange" element={<ExchangeForm addBook={addBook} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BookExchange