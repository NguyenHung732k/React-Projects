import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-md fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl">Wardrobe Planner</div>
                <div className="space-x-6">
                    <a href="#outfit-suggestions" className="text-white hover:text-gray-400 transition text-decoration-none">Outfit Suggestions</a>
                    <a href="#clothing-category" className="text-white hover:text-gray-400 transition text-decoration-none">Clothing Categories</a>
                    <a href="#travel-checklist" className="text-white hover:text-gray-400 transition text-decoration-none">Travel Checklist</a>
                    <a href="#usage-tracker" className="text-white hover:text-gray-400 transition text-decoration-none">Usage Tracker</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar