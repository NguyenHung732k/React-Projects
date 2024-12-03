import React, { createContext, useState, useContext } from 'react'
import { sampleCards } from '../data/cards'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
    const [cards, setCards] = useState(sampleCards)
    const [deck, setDeck] = useState([])
    const [battleHistory, setBattleHistory] = useState([])

    return (
        <GameContext.Provider value={{ cards, setCards, deck, setDeck, battleHistory, setBattleHistory }}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext)
