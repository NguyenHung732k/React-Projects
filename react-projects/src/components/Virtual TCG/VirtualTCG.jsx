import React, { useState } from "react"
import { GameProvider } from "./context/GameContext"
import Header from "./components/Header"
import DeckBuilder from "./components/DeckBuilder"
import BattleField from "./components/BattleField"
import Trading from "./components/Trading"

const VirtualTCG = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')

    const handleLogin = (username) => {
        setUsername(username)
        setIsLoggedIn(true)
    }

    return (
        <GameProvider>
            <div className="font-sans">
                <Header />
                <div className="max-w-screen-3xl mx-auto p-6">
                    <h1 className="text-3xl font-semibold text-center mb-6">Welcome, {username}!</h1>
                    <DeckBuilder />
                    <BattleField />
                    <Trading />
                </div>
            </div>
        </GameProvider>
    )
}

export default VirtualTCG