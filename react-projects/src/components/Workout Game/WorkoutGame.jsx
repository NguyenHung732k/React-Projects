import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Challenges from './components/Challenges'
import ChallengeDetail from './components/ChallengeDetail'
import Achievements from './components/Achievements'
import Sidebar from './components/Sidebar'

const WorkoutGame = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route exact path="/challenges" element={<Challenges />} />
                        <Route path="/challenges/:id" element={<ChallengeDetail />} />
                        <Route path="/achievements" element={<Achievements />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default WorkoutGame