import React from "react"

const Header = () => {
    return (
        <header className="bg-primary p-4 shadow-md text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Workout Beats</h1>
                <nav>
                    <ul className="flex space-x-6 p-0 m-0">
                        <li><a href="/" className="text-white hover:text-secondary text-decoration-none">Home</a></li>
                        <li><a href="/playlists" className="text-white hover:text-secondary text-decoration-none">Playlists</a></li>
                        <li><a href="/profile" className="text-white hover:text-secondary text-decoration-none">Profile</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header