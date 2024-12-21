import React from 'react'

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-extrabold">Moodify</h1>
                <p className="mt-2 text-lg">Generate playlists based on your mood & activity</p>
            </div>
        </header>
    )
}

export default Header