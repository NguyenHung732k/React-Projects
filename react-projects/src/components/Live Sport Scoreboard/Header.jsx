import React from 'react'

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                <h1 className="text-3xl font-bold">Live Sports Scoreboard</h1>
                <div className="text-lg font-medium">Track Your Favorite Sports</div>
            </div>
        </header>
    )
}

export default Header