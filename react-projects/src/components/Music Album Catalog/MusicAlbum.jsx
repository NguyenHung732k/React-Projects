import React, { useState } from 'react'
import AlbumForm from './AlbumForm'
import AlbumList from './AlbumList'
import SearchFilter from './SearchFilter'

const MusicAlbum = () => {

    const [albums, setAlbums] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')

    const addAlbum = (album) => {
        setAlbums([...albums, album])
    }

    const filteredAlbums = albums.filter(album => {
        return (
            (filter === "All" || album.genre === filter) &&
            (album.artist.toLowerCase().includes(search.toLowerCase()) ||
                album.genre.toLowerCase().includes(search.toLowerCase()))
        )
    })

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Music Album Catalog</h1>
            <AlbumForm addAlbum={addAlbum} />
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
            <AlbumList albums={filteredAlbums} />
        </div>
    )
}

export default MusicAlbum