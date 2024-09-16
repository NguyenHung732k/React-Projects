import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PollPage from './pages/PollPage'

const OnlinePoll = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/poll/:id" element={<PollPage />} />
        </Routes>
    </Router>
);

export default OnlinePoll