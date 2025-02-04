import { useState, useEffect } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode
            if (newMode) {
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
            } else {
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
            }
            return newMode
        })
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full"
        >
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    )
}

export default ThemeToggle