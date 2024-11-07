import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 fixed w-full z-10 top-0 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-3xl font-extrabold">
                    <Link to="/">Indie Game Showcase</Link>
                </h1>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-200">
                        Home
                    </Link>
                    <Link to="/add-game" className="text-white hover:text-gray-200">
                        Add a Game
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar