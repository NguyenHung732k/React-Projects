import React from 'react'

const InspirationalQuotes = () => {
    const quotes = [
        "Gratitude is not only the greatest of virtues, but the parent of all the others. - Marcus Tullius Cicero",
        "Gratitude turns what we have into enough. - Aesop",
        "The more grateful I am, the more beauty I see. - Mary Davis",
        "Gratitude is the fairest blossom which springs from the soul. - Henry Ward Beecher",
        "Gratitude is the sign of noble souls. - Aesop"
    ]

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <div className="max-w-5xl mx-auto mb-6">
            <div className="p-6 bg-gradient-to-r from-yellow-200 to-pink-300 shadow-lg rounded-xl w-full mx-auto mb-6">
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Inspirational Quote</h3>
                <p className="text-center text-gray-600 italic">{randomQuote}</p>
            </div>
        </div>
    )
}

export default InspirationalQuotes