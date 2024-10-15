import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ toggleTheme, isDarkMode }) => {
    return (
        <nav className="bg-white shadow-md dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-700 text-decoration-none dark:text-white">Virtual Tour Guide</Link>
                <div className="flex items-center">
                    <Link to="/" className="mx-4 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                        </svg>
                    </Link>
                    <Link to="/about" className="mx-4 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                    </Link>
                    <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar