import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import DebateDashboard from './components/DebateDashboard'
import AudienceView from './components/AudienceView'
import TopicList from './components/TopicList'

const DebatePlatform = () => {
    return (
        <Router>
            <div className="bg-gray-50 min-h-screen">
                <nav className="bg-blue-600 text-white p-4">
                    <ul className="flex space-x-4 justify-center p-0 m-0">
                        <li>
                            <Link to="/" className="text-white hover:text-gray-300 text-decoration-none">Debate Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/audience" className="text-white hover:text-gray-300 text-decoration-none">Audience View</Link>
                        </li>
                        <li>
                            <Link to="/topics" className="text-white hover:text-gray-300 text-decoration-none">Topics</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<DebateDashboard />} />
                    <Route path="/audience" element={<AudienceView />} />
                    <Route path="/topics" element={<TopicList />} />
                    <Route path="/debate/:topic" element={<DebateDashboard />} />
                </Routes>
            </div>
        </Router>
    )
}

export default DebatePlatform