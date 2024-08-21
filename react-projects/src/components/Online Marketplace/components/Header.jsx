import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Marketplace</Link>
                <nav>
                    <Link to="/" className="mx-4 hover:text-gray-400">Home</Link>
                    <Link to="/checkout" className="mx-4 hover:text-gray-400">Checkout</Link>
                    <Link to="/profile" className="mx-4 hover:text-gray-400">Profile</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header