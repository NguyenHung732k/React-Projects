import React, { useEffect, useState } from "react"
import { searchSongs } from "./utils/spotifyAPI" // Assuming Spotify API

const SearchResults = ({ mood, addSongToPlaylist }) => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        if (mood) {
            searchSongs(mood).then((data) => setSongs(data))
        }
    }, [mood])

    return (
        <div className="w-full md:w-1/2 mt-6 space-y-4">
            <h2 className="text-xl font-semibold">Song Recommendations</h2>
            {songs.length === 0 ? (
                <p>Loading...</p>
            ) : (
                songs.map((song, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all"
                    >
                        <img
                            src={song.albumCover}
                            alt={song.title}
                            className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h3 className="text-lg font-medium">{song.title}</h3>
                            <p className="text-sm text-gray-600">{song.artist}</p>
                        </div>
                        <button
                            onClick={() => addSongToPlaylist(song)}
                            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default SearchResults