import { useState } from 'react'
import { useGameContext } from '../context/GameContext'
import Card from './Card'

const Trading = () => {
    const { cards, setCards } = useGameContext()
    const [tradeCard, setTradeCard] = useState(null)

    const handleTrade = () => {
        const newCards = cards.filter((card) => card.id !== tradeCard.id)
        setCards(newCards)
        alert(`Traded ${tradeCard.name}!`)
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-semibold mb-4">Trade Cards</h2>
            <div className="flex justify-center items-center flex-wrap gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => setTradeCard(card)}
                        className="cursor-pointer transform transition duration-200 hover:scale-105">
                        <Card card={card} />
                    </div>
                ))}
            </div>

            {tradeCard && (
                <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Selected Card</h3>
                    <Card card={tradeCard} />
                    <button
                        onClick={handleTrade}
                        className="mt-4 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        Confirm Trade
                    </button>
                </div>
            )}
        </div>
    )
}

export default Trading