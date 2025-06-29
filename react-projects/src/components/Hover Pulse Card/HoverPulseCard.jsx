import React from 'react';
import Card from './Card'
import './HoverPulseCard.css'

const HoverPulseCard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold text-gray-800">What's New</h1>

            <Card withGlow>
                <h2 className="text-xl font-semibold text-indigo-600">🔥 Highlighted Card</h2>
                <p className="text-gray-700 mt-2">
                    This card glows and pulses once when it enters the viewport.
                </p>
            </Card>

            <Card>
                <h2 className="text-xl font-semibold text-gray-800">📘 Regular Card</h2>
                <p className="text-gray-600 mt-2">
                    Standard card with entry animation and hover effects.
                </p>
            </Card>
        </div>
    )
}

export default HoverPulseCard