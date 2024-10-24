import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MeditationList from './MeditationList'
import ProgressTracker from './ProgressTracker'
import Title from './Title'
import Forum from './Forum'

function MeditationApp() {
    return (
        <Router>
            <div className="h-screen bg-gray-100">
                <Routes>
                    <Route path="/" exact element={<Title />} />
                    <Route path="/meditations" element={<MeditationList />} />
                    <Route path="/progress" element={<ProgressTracker />} />
                    <Route path="/forum" element={<Forum />} />
                </Routes>
            </div>
        </Router>
    )
}

export default MeditationApp