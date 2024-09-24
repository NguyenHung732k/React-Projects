import React, { useState } from 'react'
import BookmarkForm from './BookmarkForm'
import BookmarkList from './BookmarkList'

const BookmarkManagement = () => {
    const [bookmarks, setBookmarks] = useState([])

    const addBookmark = (bookmark) => {
        setBookmarks((prev) => [...prev, bookmark])
    }

    const deleteBookmark = (url) => {
        setBookmarks((prev) => prev.filter((bookmark) => bookmark.url !== url))
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Bookmark Manager</h1>
            <BookmarkForm addBookmark={addBookmark} />
            <BookmarkList bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
        </div>
    )
}

export default BookmarkManagement