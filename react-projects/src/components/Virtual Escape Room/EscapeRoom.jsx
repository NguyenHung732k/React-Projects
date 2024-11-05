import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Room1 from './pages/Room1'
import Room2 from './pages/Room2'
import Room3 from './pages/Room3'

const EscapeRoom = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room1" element={<Room1 />} />
                <Route path="/room2" element={<Room2 />} />
                <Route path="/room3" element={<Room3 />} />
            </Routes>
        </Router>
    )
}

export default EscapeRoom