import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 shadow-lg">
            <h1 className="text-3xl font-bold">Fashion Lookbook</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <Link to="/" className="hover:text-gray-200 text-white text-decoration-none">Home</Link>
                    </button>
                    <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        <Link to="/create" className="hover:text-gray-200 text-white text-decoration-none">Create Lookbook</Link>
                    </button>
                </ul>
            </nav>
        </header>
    )
}

export default Header