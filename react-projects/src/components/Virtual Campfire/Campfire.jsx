import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CampfirePage from './pages/CampfirePage'
import RecordingPage from './pages/RecordingPage'
import CollaborativeStoryPage from './pages/CollaborativeStoryPage'
import LibraryPage from './pages/LibraryPage'

const Campfire = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<CampfirePage />} />
                <Route path="/record" element={<RecordingPage />} />
                <Route path="/collaborative" element={<CollaborativeStoryPage />} />
                <Route path="/library" element={<LibraryPage />} />
            </Routes>
        </Router>
    )
}

export default Campfire