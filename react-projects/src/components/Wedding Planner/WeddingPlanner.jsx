import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Planner from './pages/Planner'

function WeddingPlanner() {
    return (
        <Router>
            <div className="min-h-screen bg-light-gray">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/planner" element={<Planner />} />
                </Routes>
            </div>
        </Router>
    )
}

export default WeddingPlanner