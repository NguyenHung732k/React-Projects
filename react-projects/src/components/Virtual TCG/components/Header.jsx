import React from 'react'

const Header = () => {
    return (
        <header className="bg-primary text-white p-4 shadow-md">
            <div className="flex justify-between items-center max-w-screen-lg mx-auto">
                <div className="text-2xl font-semibold">Virtual TCG</div>
                <nav className="space-x-4">
                    <a href="#home" className="text-decoration-none text-white hover:text-gray-300">Home</a>
                    <a href="#leaderboard" className="text-decoration-none text-white hover:text-gray-300">Leaderboard</a>
                    <a href="#about" className="text-decoration-none text-white hover:text-gray-300">About</a>
                </nav>
            </div>
        </header>
    )
}

export default Header