import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import HeroSection from './components/HeroSection'
import CluePage from './components/CluePage'
import Leaderboard from './components/Leaderboard'
import UserProfile from './components/UserProfile'
import GameCompleted from './components/GameCompleted'

const TreasureHunt = () => {
    return (
        <GameProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/clue" element={<CluePage />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/completed" element={<GameCompleted />} />
                </Routes>
            </Router>
        </GameProvider>
    )
}

export default TreasureHunt