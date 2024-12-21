import React, { useState } from "react"
import Header from "./Header"
import MoodSelector from "./MoodSelector"
import Playlist from "./Playlist"
import SearchResults from "./SearchResults"
import SharePlaylist from "./SharePlaylist"

const PlaylistGenerator = () => {
    const [mood, setMood] = useState("")
    const [playlist, setPlaylist] = useState([])

    const addSongToPlaylist = (song) => {
        setPlaylist((prevPlaylist) => [...prevPlaylist, song])
    }

    const removeSongFromPlaylist = (song) => {
        setPlaylist((prevPlaylist) =>
            prevPlaylist.filter((item) => item !== song)
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto p-6">
                <MoodSelector setMood={setMood} />
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <SearchResults mood={mood} addSongToPlaylist={addSongToPlaylist} />
                    <Playlist
                        playlist={playlist}
                        addSongToPlaylist={addSongToPlaylist}
                        removeSongFromPlaylist={removeSongFromPlaylist}
                    />
                </div>
                <SharePlaylist playlist={playlist} />
            </div>
        </div>
    )
}

export default PlaylistGenerator