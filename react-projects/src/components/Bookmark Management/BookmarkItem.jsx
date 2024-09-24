import React from 'react'

const BookmarkItem = ({ bookmark, deleteBookmark }) => {
    return (
        <div className="flex justify-between items-center bg-white shadow rounded-lg p-4 mb-2">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {bookmark.title}
            </a>
            <button
                onClick={() => deleteBookmark(bookmark.url)}
                className="text-red-500 hover:text-red-700 transition duration-200"
            >
                Delete
            </button>
        </div>
    )
}

export default BookmarkItem