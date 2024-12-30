import React, { useState } from "react"
import axios from "axios"
import SearchBar from "./SearchBar"
import LyricsDisplay from "./LyricsDisplay"
import { FaSpinner } from 'react-icons/fa'

const LyricsFinder = () => {
    const [lyrics, setLyrics] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchLyrics = async (songTitle, artist) => {
        try {
            setLoading(true)
            setError(null)
            const res = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
            setLyrics(res.data.lyrics)
        } catch (error) {
            setError("Lyrics not found or invalid song/artist.")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
                    Lyrics Finder
                </h1>
                <SearchBar fetchLyrics={fetchLyrics} />
                {loading && (
                    <div className="flex justify-center mt-4">
                        <FaSpinner className="animate-spin text-4xl text-blue-500" />
                    </div>
                )}
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                <LyricsDisplay lyrics={lyrics} />
            </div>
        </div>
    )
}

export default LyricsFinder