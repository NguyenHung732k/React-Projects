import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header className="p-8">
            <nav className="container mx-auto flex justify-between items-centerborder-gray-200">
                <Link to="/" className="text-2xl font-bold text-decoration-none">MovieApp</Link>
            </nav>
        </header>
    )
}

export default Header