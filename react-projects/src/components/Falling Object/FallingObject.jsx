import React, { useState, useEffect } from "react"
import Object from "./Object"

import banana from '../../assets/banana.png'
import apple from '../../assets/apple.png'
import pear from '../../assets/pear.png'

const FallingObject = () => {
    const [caughtItems, setCaughtItems] = useState([])
    const [gameStarted, setGameStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [fallingItems, setFallingItems] = useState([])

    const spawnItem = () => {
        if (gameOver) return

        const items = [
            { name: "Banana", image: banana },
            { name: "Apple", image: apple },
            { name: "Pear", image: pear },
        ]

        const randomItem = items[Math.floor(Math.random() * items.length)]
        setFallingItems((prevItems) => [
            ...prevItems,
            { ...randomItem, id: Date.now() + Math.random() },
        ])
    }

    const handleCatch = (item) => {
        if (gameOver) return
        setCaughtItems((prevCaughtItems) => [
            ...prevCaughtItems,
            { ...item, id: prevCaughtItems.length },
        ])
        setFallingItems(fallingItems.filter((f) => f.id !== item.id))
    }

    const handleStartGame = () => {
        setCaughtItems([])
        setFallingItems([])
        setGameStarted(true)
        setGameOver(false)
    }

    const handleGameOver = () => {
        setFallingItems([])
        setGameOver(true)
    }

    useEffect(() => {
        if (gameStarted && !gameOver) {
            const intervalId = setInterval(spawnItem, Math.random() * 2000 + 1000)

            return () => clearInterval(intervalId)
        }
    }, [gameStarted, gameOver])

    useEffect(() => {
        if (caughtItems.length > 10) {
            setGameOver(true)
        }
    }, [caughtItems])

    return (
        <div className="relative w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-4">
                <h1 className="text-4xl font-extrabold">Falling Fun</h1>
                <button
                    onClick={handleGameOver}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
                >
                    End Game
                </button>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full px-4 py-2">
                {!gameStarted && (
                    <button
                        onClick={handleStartGame}
                        className="bg-green-500 text-white py-3 px-6 rounded-full text-xl shadow-lg hover:bg-green-600 transition duration-300"
                    >
                        Start Game
                    </button>
                )}
                <p className="text-lg mt-3 font-medium">
                    Caught Items: {caughtItems.length}
                </p>
            </div>

            {gameStarted &&
                fallingItems.map((item) => (
                    <Object
                        key={item.id}
                        item={item}
                        onCatch={handleCatch}
                        gameOver={gameOver}
                    />
                ))}
        </div>
    )
}

export default FallingObject