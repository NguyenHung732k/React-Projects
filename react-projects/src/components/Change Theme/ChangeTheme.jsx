import React, { useEffect, useState } from 'react'
import UseLocalStorage from './UseLocalStorage'
import './ChangeTheme.css'

const ChangeTheme = () => {

    const [theme, setTheme] = UseLocalStorage("theme", "dark")


    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="change-theme-container">
                <button onClick={handleToggleTheme}
                    className="change-theme-button">Change Theme
                </button>
            </div>
        </div>
    )
}

export default ChangeTheme