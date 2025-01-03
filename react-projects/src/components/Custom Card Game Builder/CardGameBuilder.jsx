import React, { useState } from 'react'
import CardEditor from './CardEditor'
import RuleEditor from './RuleEditor'
import MultiplayerLobby from './MultiplayerLobby'
import { BrowserRouter } from 'react-router-dom'

const CardGameBuilder = () => {
    const [view, setView] = useState('cardEditor')

    const renderView = () => {
        switch (view) {
            case 'cardEditor':
                return <CardEditor />
            case 'ruleEditor':
                return <RuleEditor />
            case 'multiplayerLobby':
                return <MultiplayerLobby />
            default:
                return <CardEditor />
        }
    }

    return (
        <BrowserRouter>
            <div className="bg-gray-50 min-h-screen font-sans">
                <header className="bg-blue-600 text-white p-6 text-center">
                    <h1 className="text-3xl font-bold">Custom Card Game Builder</h1>
                </header>

                <nav className="flex justify-center space-x-8 py-4 bg-gray-800 text-white">
                    <button className="hover:bg-blue-500 transition duration-200 px-4 py-2 rounded-md" onClick={() => setView('cardEditor')}>Card Editor</button>
                    <button className="hover:bg-blue-500 transition duration-200 px-4 py-2 rounded-md" onClick={() => setView('ruleEditor')}>Rules Editor</button>
                    <button className="hover:bg-blue-500 transition duration-200 px-4 py-2 rounded-md" onClick={() => setView('multiplayerLobby')}>Multiplayer</button>
                </nav>

                <div className="container mx-auto py-8 px-4">
                    {renderView()}
                </div>
            </div>
        </BrowserRouter>
    )
}

export default CardGameBuilder