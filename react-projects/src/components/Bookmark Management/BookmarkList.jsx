import React from 'react'
import BookmarkItem from './BookmarkItem'

const BookmarkList = ({ bookmarks, deleteBookmark }) => {
    return (
        <div className="mt-4">
            {bookmarks.length === 0 ? (
                <p className="text-gray-500">No bookmarks added yet.</p>
            ) : (
                bookmarks.map((bookmark) => (
                    <BookmarkItem key={bookmark.url} bookmark={bookmark} deleteBookmark={deleteBookmark} />
                ))
            )}
        </div>
    )
}

export default BookmarkList