import React, { useState } from 'react'
import Timer from './Timer'

const FlashSaleTimer = () => {
    const [saleStarted, setSaleStarted] = useState(false)
    const [currentSaleUrl, setCurrentSaleUrl] = useState("")

    const sales = [
        {
            name: "Black Friday Sale",
            description: "Massive discounts on electronics!",
            date: "2024-12-30T00:00:00",
            url: "/sale/black-friday"
        },
        {
            name: "Cyber Monday Sale",
            description: "Unbeatable prices on tech gadgets.",
            date: "2024-12-01T00:00:00",
            url: "/sale/cyber-monday"
        },
        {
            name: "Christmas Sale",
            description: "Get your holiday shopping done early!",
            date: "2024-12-15T12:00:00",
            url: "/sale/christmas"
        }
    ]

    const handleSaleStart = (url) => {
        setSaleStarted(true)
        setCurrentSaleUrl(url)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            {!saleStarted ? (
                <div className="space-y-6">
                    {sales.map((sale, index) => (
                        <Timer key={index} sale={sale} onSaleStart={handleSaleStart} />
                    ))}
                </div>
            ) : (
                <div className="p-8 bg-green-600 text-white rounded-lg shadow-xl max-w-lg mx-auto text-center">
                    <h2 className="text-3xl font-semibold">The Flash Sale is LIVE!</h2>
                    <p className="mt-4 text-lg">Hurry up! The best deals are waiting for you.</p>
                    <a
                        href={currentSaleUrl}
                        className="mt-6 inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-200 transition duration-300"
                    >
                        Shop Now
                    </a>
                </div>
            )}
        </div>
    )
}

export default FlashSaleTimer