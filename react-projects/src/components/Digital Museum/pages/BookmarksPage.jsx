import React, { useState, useEffect } from 'react'
import ExhibitCard from '../components/ExhibitCard'

const BookmarksPage = () => {
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        setBookmarks(savedBookmarks)
    }, [])

    const removeBookmark = (id) => {
        const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id)
        setBookmarks(updatedBookmarks)
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
    }

    return (
        <div className="space-y-12 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">Your Bookmarked Exhibits</h1>
            <div className="mt-6">
                {bookmarks.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">You have no bookmarked exhibits.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {bookmarks.map((exhibit) => (
                            <div key={exhibit.id} className="relative">
                                <ExhibitCard category={exhibit} />
                                <button
                                    onClick={() => removeBookmark(exhibit.id)}
                                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
                                >
                                    <span className="text-xl">x</span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookmarksPage