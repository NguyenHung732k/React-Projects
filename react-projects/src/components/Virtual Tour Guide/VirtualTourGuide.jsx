import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const VirtualTourGuide = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.body.classList.toggle('dark', !isDarkMode)
    }

    return (
        <Router>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

export default VirtualTourGuide