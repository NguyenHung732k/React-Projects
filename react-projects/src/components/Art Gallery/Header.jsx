import React from 'react'

const Header = () => {
    return (
        <header className="bg-white p-4 fixed top-0 inset-x-0 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Virtual Art Gallery</h1>
                <nav>
                    <ul className="flex justify-center space-x-4 mb-0">
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 text-decoration-none">Home</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 text-decoration-none">About</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 text-decoration-none">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header