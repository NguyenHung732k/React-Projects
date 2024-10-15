import React from 'react'

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 rounded-md focus:outline-none hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
            {isDarkMode ? '🌙' : '☀️'}
        </button>
    )
}

export default ThemeToggle