import React, { useState } from 'react'

function VideoSearch({ videos, onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {
        const filteredVideos = videos.filter((video) =>
            video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        onSearch(filteredVideos)
    }

    return (
        <div className="my-8">
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search videos..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="w-full p-2.5 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default VideoSearch