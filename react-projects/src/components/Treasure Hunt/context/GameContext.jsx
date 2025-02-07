import React, { createContext, useContext, useState, useEffect } from 'react'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Player 1',
        score: 0,
        avatar: 'avatar.png',
    })

    const [players, setPlayers] = useState([
        { name: 'Player 1', score: 50 },
        { name: 'Player 2', score: 30 },
    ])

    const [location, setLocation] = useState({
        lat: null,
        lng: null,
    })

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setLocation({ lat: latitude, lng: longitude })
            })
        } else {
            console.error('Geolocation is not supported by this browser.')
        }
    }, [])

    return (
        <GameContext.Provider value={{ user, setUser, players, setPlayers, location }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext)