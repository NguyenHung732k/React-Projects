import React from 'react'

const Playlist = ({ playlist, addSongToPlaylist, removeSongFromPlaylist }) => {
    return (
        <div className="w-full md:w-1/2 mt-6">
            <h2 className="text-xl font-semibold">Your Playlist</h2>
            <div className="bg-white rounded-lg p-4 shadow-lg">
                {playlist.length === 0 ? (
                    <p>Your playlist is empty! Add songs to get started.</p>
                ) : (
                    <ul className="space-y-4">
                        {playlist.map((song, index) => (
                            <li
                                key={index}
                                className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
                            >
                                <img
                                    src={song.albumCover}
                                    alt={song.title}
                                    className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium">{song.title}</h3>
                                    <p className="text-sm text-gray-600">{song.artist}</p>
                                </div>
                                <button
                                    onClick={() => removeSongFromPlaylist(song)}
                                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Playlist