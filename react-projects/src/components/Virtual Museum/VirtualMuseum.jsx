import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Museum from './pages/Museum'

const VirtualMuseum = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/museum" element={<Museum />} />
            </Routes>
        </Router>
    )
}

export default VirtualMuseum