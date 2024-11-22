import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            onClick={toggleTheme}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default ThemeToggle