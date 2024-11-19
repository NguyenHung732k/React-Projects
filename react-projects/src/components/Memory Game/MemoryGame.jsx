import React, { useState, useEffect } from 'react'
import { Images } from './images'


const generateCards = () => {
    const imagePaths = [
        Images.image1,
        Images.image2,
        Images.image3,
        Images.image4,
        Images.image5,
        Images.image6,
        Images.image7,
        Images.image8,
    ]
    
    const doubledImagePaths = [...imagePaths, ...imagePaths]
    return doubledImagePaths.sort(() => Math.random() - 0.5)
}

const MemoryGame = () => {
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [matched, setMatched] = useState([])
    const [timer, setTimer] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)

    useEffect(() => {
        let interval
        if (gameStarted && !gameOver) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1)
            }, 1000)
        }

        return () => clearInterval(interval)
    }, [gameStarted, gameOver])

    const flipCard = (index) => {
        if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
            const newFlipped = [...flipped, index]
            setFlipped(newFlipped)

            if (newFlipped.length === 2) {
                const [firstIndex, secondIndex] = newFlipped
                if (cards[firstIndex] === cards[secondIndex]) {
                    setMatched((prev) => [...prev, firstIndex, secondIndex])
                }

                setTimeout(() => {
                    setFlipped([])
                }, 1000)
            }
        }
    }

    const resetGame = () => {
        setCards(generateCards())
        setFlipped([])
        setMatched([])
        setTimer(0)
        setGameOver(false)
        setGameStarted(false)
    }

    const startGame = () => {
        setCards(generateCards())
        setFlipped([])
        setMatched([])
        setTimer(0)
        setGameStarted(true)
        setGameOver(false)
    }

    useEffect(() => {
        if (matched.length === cards.length) {
            setGameOver(true)
        }
    }, [matched, cards.length])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-purple-300 py-6">
            <h1 className="text-5xl font-bold text-white mb-6">Memory Match</h1>

            {!gameStarted && (
                <div className="text-center mb-6">
                    <button
                        onClick={startGame}
                        className="px-8 py-4 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Start Game
                    </button>
                </div>
            )}

            {gameStarted && (
                <div className="w-full max-w-3xl flex flex-col items-center">
                    <div className="text-2xl font-semibold text-white mb-4">
                        Time: {timer}s
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {cards.map((value, index) => (
                            <div
                                key={index}
                                className={`w-24 h-24 bg-gray-300 rounded-lg transform transition duration-300 ease-in-out hover:scale-105 relative cursor-pointer`}
                                onClick={() => flipCard(index)}
                            >
                                <div className="flex items-center justify-center h-full">
                                    {(flipped.includes(index) || matched.includes(index)) ? (
                                        <div className="text-3xl font-semibold text-gray-800">{value}</div>
                                    ) : (
                                        <div className="text-3xl text-gray-600">?</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {gameStarted && gameOver && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 text-center shadow-xl">
                        <p className="text-3xl font-bold text-green-600 mb-4">You Won!</p>
                        <p className="text-xl text-gray-700 mb-6">Time: {timer}s</p>
                        <button
                            onClick={resetGame}
                            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                        >
                            Play Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MemoryGame