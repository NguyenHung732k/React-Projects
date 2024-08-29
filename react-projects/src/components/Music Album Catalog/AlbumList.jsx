import React from 'react'

const AlbumList = ({ albums }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold my-4">Album List</h2>
            <ul className="flex flex-wrap gap-2 justify-center p-0">
                {albums.map((album, index) => (
                    <li key={index} className="bg-gray-100 flex-grow text-black border-l-8 border-blue-500 rounded-md px-3 py-2 w-full">
                        <strong>{album.artist}</strong> - {album.genre} ({album.releaseYear.getFullYear()})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AlbumList