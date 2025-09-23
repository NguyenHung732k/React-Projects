import React from 'react';
import Card from './Card'
import './ShineCard.css'

const ShineCard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-8">
            <h1 className="text-2xl font-bold text-gray-800">✨ Product Showcase</h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card
                    image="https://source.unsplash.com/400x300/?smartwatch"
                    title="Smart Watch Pro"
                    description="Experience the future of wearable tech."
                />
                <Card
                    image="https://source.unsplash.com/400x300/?headphones"
                    title="Noise Cancelling Headphones"
                    description="Crystal clear sound with zero distractions."
                />
                <Card
                    image="https://source.unsplash.com/400x300/?laptop"
                    title="Ultrabook X"
                    description="Power meets portability in one sleek device."
                />
            </div>
        </div>
    )
}

export default ShineCard