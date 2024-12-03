import { useGameContext } from "../context/GameContext"

const BattleField = () => {
    const { deck, setDeck, battleHistory, setBattleHistory } = useGameContext()

    const startBattle = () => {
        if (deck.length !== 5) {
            alert('Please complete your deck!')
            return
        }

        const result = Math.random() > 0.5 ? 'Win' : 'Loss'
        setBattleHistory((prevHistory) => [...prevHistory, result])
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Battle Time!</h2>
                <p className="mb-6 text-lg">Prepare your deck and fight your opponent!</p>
                <button
                    onClick={startBattle}
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-600 transition duration-200">
                    Start Battle
                </button>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold mt-2">Battle History</h3>
                    <ul className="flex justify-center items-center flex-wrap gap-4 m-0 p-0">
                        {battleHistory.map((result, index) => (
                            <li key={index} className="text-xl">
                                Battle {index + 1}: {result}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BattleField