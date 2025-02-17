import React from 'react'

const Header = () => (
    <header className="bg-primary text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Crypto Portfolio Tracker</h1>
            <nav className="space-x-6">
                <a href="#portfolio" className="text-lg text-white text-decoration-none hover:text-secondary transition">Portfolio</a>
                <a href="#prices" className="text-lg text-white text-decoration-none hover:text-secondary transition">Prices</a>
                <a href="#news" className="text-lg text-white text-decoration-none hover:text-secondary transition">News</a>
            </nav>
        </div>
    </header>
)

export default Header