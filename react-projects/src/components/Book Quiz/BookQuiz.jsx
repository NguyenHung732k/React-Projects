import React, { useState } from 'react'

import books from './books'

// const recommendBookFromAPI = async (genre, length) => {
//     const query = `${genre} books`
//     const maxResults = 5

//     try {
//         const response = await fetch(
//             `https://openlibrary.org/search.json?q=${query}&limit=${maxResults}`
//         )
//         const data = await response.json()

//         let books = data.docs.map((item) => ({
//             title: item.title,
//             author: item.author_name ? item.author_name[0] : 'Unknown Author',
//             year: item.first_publish_year || 'Unknown Year',
//             rating: item.average_rating || 0,
//             description: item.subject ? item.subject.join(', ') : 'No description available',
//             genre: genre,
//             coverImage: item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg` : ''
//         }))

//         if (length === 'Long') {
//             books = books.filter((book) => book.title.length > 15)
//         } else if (length === 'Short') {
//             books = books.filter((book) => book.title.length <= 15)
//         }

//         if (books.length > 0) {
//             return books[0]
//         } else {
//             return {
//                 title: 'No suitable book found',
//                 author: '',
//                 year: '',
//                 rating: 0,
//                 description: 'Try adjusting your preferences',
//                 coverImage: ''
//             }
//         }
//     } catch (error) {
//         console.error('Error geting data from Library:', error)
//         return {
//             title: 'Error fetching book data',
//             author: '',
//             year: '',
//             rating: 0,
//             description: 'Unable to get book data at the moment.',
//             coverImage: ''
//         }
//     }
// }

const BookQuiz = () => {
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState({})
    const [bookRecommendation, setBookRecommendation] = useState(null)
    const [loading, setLoading] = useState(false)

    const questions = [
        {
            question: 'What genre do you prefer?',
            options: ['Adventure', 'Dystopia', 'Classic', 'Fantasy'],
            key: 'genre',
        },
        {
            question: 'Do you like long or short books?',
            options: ['Long', 'Short'],
            key: 'length',
        },
        {
            question: 'Do you like long or short books?',
            options: ['Long', 'Short'],
            key: 'length',
        },
        {
            question: 'Do you like long or short books?',
            options: ['Long', 'Short'],
            key: 'length',
        },
    ]

    const handleAnswer = (key, answer) => {
        setAnswers((prev) => ({ ...prev, [key]: answer }))
        if (step < questions.length - 1) {
            setStep(step + 1)
        } else {
            recommendBook()
        }
    }

    const recommendBook = async () => {
        setLoading(true)
        // const { genre, length } = answers
        const { genre } = answers
        // const recommendedBook = await recommendBookFromAPI(genre, length)
        const recommendedBook = books.find((book) => book.genre === genre)
        setBookRecommendation(recommendedBook)
        setLoading(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Book Recommendation Quiz</h1>

                {loading ? (
                    <div className="flex justify-center items-center space-x-2">
                        <div className="w-6 h-6 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                        <p className="text-gray-600">Loading...</p>
                    </div>
                ) : bookRecommendation ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">We Recommend:</h2>
                        {bookRecommendation.coverImage && (
                            <img
                                src={bookRecommendation.coverImage}
                                alt="Book cover"
                                className="mx-auto mb-4 w-48 h-72 object-cover rounded-lg shadow-lg"
                            />
                        )}
                        <h3 className="text-xl font-bold text-gray-900">{bookRecommendation.title}</h3>
                        <p className="mt-2 text-gray-700">Author: {bookRecommendation.author}</p>
                        <p className="mt-2 text-gray-700">Published in: {bookRecommendation.year}</p>
                        <p className="mt-2 text-gray-700">Rating: {bookRecommendation.rating} ★</p>
                        <p className="mt-4 text-gray-600">{bookRecommendation.description}</p>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between mb-4 text-gray-600">
                            <p>Step {step + 1} of {questions.length}</p>
                            <p className="font-semibold">{questions[step].question}</p>
                        </div>
                        <div className="space-y-4">
                            {questions[step].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(questions[step].key, option)}
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 transform hover:scale-105"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookQuiz