import React from 'react'
import { useTips } from './TipProvider'
import TipCard from './TipCard'

const TipList = () => {
    const tips = useTips()

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Daily Eco-Friendly Tips</h2>
            {tips.map((tip, index) => (
                <TipCard key={index} tip={tip} />
            ))}
        </div>
    )
}

export default TipList