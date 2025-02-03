import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import ActivitySelection from "./components/ActivitySelection"
import Playlist from "./components/Playlist"
import Player from "./components/Player"

const WorkoutMusic = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activity" element={<ActivitySelection />} />
                <Route path="/playlists/:activity" element={<Playlist />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </Router>
    )
}

export default WorkoutMusic