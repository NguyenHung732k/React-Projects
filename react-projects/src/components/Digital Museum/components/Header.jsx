import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl text-white font-bold text-decoration-none">
                    Digital Museum Tour
                </Link>
                <div className="flex items-center space-x-4">
                    <Link to="/" className="hover:underline text-white text-decoration-none">Home</Link>
                    <Link to="/bookmarks" className="hover:underline text-white text-decoration-none">Bookmarks</Link>
                    <DarkModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header