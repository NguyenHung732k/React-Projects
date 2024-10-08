import React from 'react'
import { TipProvider } from './TipProvider'
import TipList from './TipList'

const EcoFriendlyTip = () => {
    return (
        <TipProvider>
            <div className="min-h-screen bg-green-50 flex items-center justify-center">
                <div className="text-center max-w-md">
                    <h1 className="text-4xl font-bold mb-6 text-green-800">Eco-Friendly Tips</h1>
                    <TipList />
                </div>
            </div>
        </TipProvider>
    )
}

export default EcoFriendlyTip