import React from 'react'

const Header = () => {
    return (
        <header className="bg-blue-600 shadow-lg fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-white text-2xl font-semibold hover:cursor-pointer hover:underline transition duration-200">
                    Interactive Movie Timeline
                </h1>
            </div>
        </header>
    )
}

export default Header