import React, { useState } from 'react'
import './BookmarkButton.css'

const BookmarkButton = () => {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [showToast, setShowToast] = useState(false)

    const handleBookmarkToggle = () => {
        setIsBookmarked((prev) => !prev)
        setShowToast(true)

        setTimeout(() => {
            setShowToast(false)
        }, 2000)
    }

    return (
        <div className="w-screen h-screen relative flex items-center justify-center focus:outline-none">
            {/* Bookmark Button */}
            <button
                onClick={handleBookmarkToggle}
                className="relative p-2 transition-all duration-300 transform group hover:scale-110 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-10 w-10 transition-all duration-500 ${isBookmarked ? 'text-yellow-400 scale-110 animate-fill' : 'text-gray-300'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3v18l7-4 7 4V3H5z"
                    />
                </svg>
            </button>

            {showToast && (
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 py-3 px-6 bg-black text-white text-sm rounded-lg shadow-xl opacity-0 animate-fadeIn">
                    {isBookmarked ? 'Item Saved' : 'Bookmark Removed'}
                </div>
            )}
        </div>
    )
}

export default BookmarkButton