import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme}>
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    )
}

export default ThemeToggle