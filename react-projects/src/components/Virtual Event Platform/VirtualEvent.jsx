import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import EventDashboard from './EventDashboard'
import EventPage from './EventPage'
import EventSchedule from './EventSchedule'

const VirtualEvent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<EventDashboard />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/schedule" element={<EventSchedule />} />
            </Routes>
        </Router>
    )
}

export default VirtualEvent