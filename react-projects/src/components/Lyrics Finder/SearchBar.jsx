import React, { useState } from "react"

const SearchBar = ({ fetchLyrics }) => {
    const [songTitle, setSongTitle] = useState("")
    const [artist, setArtist] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (songTitle && artist) {
            fetchLyrics(songTitle, artist)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6 space-y-4">
            <div className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Song Title"
                    value={songTitle}
                    onChange={(event) => setSongTitle(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            <div className="w-full max-w-md">
                <input
                    type="text"
                    placeholder="Artist"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            <button
                type="submit"
                className="w-full max-w-md py-3 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </form>
    )
}

export default SearchBar