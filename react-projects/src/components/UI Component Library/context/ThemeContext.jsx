import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(prev => !prev)
        document.documentElement.classList.toggle('dark', !isDark)
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}