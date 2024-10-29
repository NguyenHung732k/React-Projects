import { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.documentElement.classList.toggle('dark', !darkMode)
    }

    return (
        <header className="bg-blue-600 text-white mb-4 p-4 flex justify-between items-center">
            <h1 className="text-lg font-bold mb-0">Social Media Dashboard</h1>
            <button onClick={toggleDarkMode} className="bg-gray-500 text-white p-2 rounded">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    )
}

export default Header