import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="mb-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-blue-500 text-decoration-none">Home</Link></li>
                <li><Link to="/" className="text-blue-500 text-decoration-none">My Campaigns</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar