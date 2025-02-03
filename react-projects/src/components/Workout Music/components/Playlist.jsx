import React, { useState, useEffect } from "react"

const Playlist = () => {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        // Fetch playlists from API (or mock data)
        setPlaylists([
            { title: "Motivational Running", genre: "Hip-Hop", image: "playlist1.jpg" },
            { title: "Calm Yoga Tunes", genre: "Ambient", image: "playlist2.jpg" },
            { title: "Strength Training Beats", genre: "Rock", image: "playlist3.jpg" },
        ])
    }, [])

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6">Curated Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {playlists.map((playlist, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                    >
                        <img src={`./assets/images/${playlist.image}`} alt={playlist.title} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="mt-4 text-xl font-semibold">{playlist.title}</h3>
                        <p className="text-gray-600">{playlist.genre}</p>
                        <button className="mt-4 bg-primary text-white py-2 px-6 rounded-lg shadow-md hover:bg-secondary transition duration-300">
                            Play
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Playlist