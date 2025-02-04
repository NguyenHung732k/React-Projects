import React from 'react'

const EcoTips = () => {
    const tips = [
        { icon: '🚶‍♂️', text: 'Use public transportation or carpool.' },
        { icon: '💡', text: 'Switch to energy-efficient LED bulbs.' },
        { icon: '♻️', text: 'Recycle paper, plastic, and metal.' },
        { icon: '💧', text: 'Reduce water consumption by fixing leaks.' },
    ]

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Eco-Friendly Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md hover:bg-green-50 transition">
                        <span className="text-2xl">{tip.icon}</span>
                        <p className="text-gray-700">{tip.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EcoTips