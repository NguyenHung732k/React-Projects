import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import TimelinePage from "./pages/TimelinePage"

const MovieTimeline = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/timeline" element={<TimelinePage />} />
            </Routes>
        </Router>
    )
}

export default MovieTimeline