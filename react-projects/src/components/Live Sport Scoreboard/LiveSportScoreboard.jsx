import React, { useState } from 'react'
import Header from './Header'
import SportsList from './SportsList'
import Scoreboard from './Scoreboard'

const LiveSportScoreboard = () => {
    const [selectedSport, setSelectedSport] = useState(null)

    const handleSportSelection = (sport) => {
        setSelectedSport(sport)
    }

    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            <Header />
            <div className="max-w-7xl mx-auto px-6 py-6">
                <SportsList onSelectSport={handleSportSelection} />
                {selectedSport && <Scoreboard selectedSport={selectedSport} />}
            </div>
        </div>
    )
}

export default LiveSportScoreboard