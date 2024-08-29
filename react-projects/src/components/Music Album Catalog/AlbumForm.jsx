import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const AlbumForm = ({ addAlbum }) => {

    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState(new Date())

    const handleSubmit = (event) => {
        event.preventDefault()
        addAlbum({ artist, genre, releaseYear })
        setArtist('')
        setGenre('')
        setReleaseYear(new Date())
    }

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid gap-4 md:grid-cols-3">
                <input
                    type="text"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                    placeholder="Artist"
                    className="p-2 border border-gray-300 rounded"
                    required
                />
                <select
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                    className="ml-4 p-2 border border-gray-300 rounded"
                >
                    <option value="All">All Genres</option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Classical">Classical</option>
                </select>
                <DatePicker className="w-full p-2 border border-gray-300 rounded" selected={releaseYear} onChange={(date) => setReleaseYear(date)} />
                <button type="submit" className="col-span-3 bg-blue-500 text-white p-2 rounded">Add Album</button>
            </div>
        </form>
    )
}

export default AlbumForm