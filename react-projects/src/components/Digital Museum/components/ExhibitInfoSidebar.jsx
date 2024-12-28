import React, { useState } from 'react'

const ExhibitInfoSidebar = ({ exhibit }) => {
    const [isBookmarked, setIsBookmarked] = useState(
        JSON.parse(localStorage.getItem('bookmarks'))?.some((bookmark) => bookmark.id === exhibit.id) || false
    )

    const addBookmark = () => {
        const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
        if (!existingBookmarks.some((bookmark) => bookmark.id === exhibit.id)) {
            existingBookmarks.push(exhibit)
            localStorage.setItem('bookmarks', JSON.stringify(existingBookmarks))
            setIsBookmarked(true)
        }
    }

    return (
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800">{exhibit.name}</h2>
            <p className="mt-2 text-gray-600">{exhibit.artist}</p>

            <div className="mt-4 space-y-4">
                <p className="text-gray-700">{exhibit.description}</p>

                <button
                    onClick={addBookmark}
                    className={`mt-4 w-full py-2 px-4 text-white rounded-lg ${isBookmarked ? 'bg-gray-500' : 'bg-blue-500'} hover:bg-blue-600 transition duration-200`}
                    disabled={isBookmarked}
                >
                    {isBookmarked ? 'Bookmarked' : 'Bookmark Exhibit'}
                </button>
            </div>

            <div className="mt-6 border-t pt-4 text-sm text-gray-500">
                <p className="font-semibold">Date Created:</p>
                <p>{exhibit.dateCreated || 'Not available'}</p>
            </div>
        </div>
    )
}

export default ExhibitInfoSidebar