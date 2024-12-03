import { useGameContext } from "../context/GameContext"
import Card from "./Card"

const DeckBuilder = () => {
    const { cards, deck, setDeck } = useGameContext()

    const handleAddCard = (card) => {
        if (deck.length < 5) {
            setDeck([...deck, card])
        }
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-semibold mb-4">Build Your Deck</h2>
            <div className="flex justify-center items-center flex-wrap gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => handleAddCard(card)}
                        className="cursor-pointer transform transition duration-200 hover:scale-105"
                    >
                        <Card card={card} />
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Your Deck</h3>
                <div className="flex justify-center items-center flex-wrap gap-4">
                    {deck.map((card) => (
                        <div key={card.id}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DeckBuilder