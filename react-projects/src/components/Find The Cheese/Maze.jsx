import React, { useState, useEffect } from "react"
import Cheese from "./Cheese"
import Mouse from "./Mouse"
import Victory from "./Victory"
import Timer from "./Timer"

const Maze = () => {
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 })
    const [cheesePosition, setCheesePosition] = useState({ x: 0, y: 0 })
    const [mousePositions, setMousePositions] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [victory, setVictory] = useState(false)
    const [moveCount, setMoveCount] = useState(0)

    const mazeSize = 10

    useEffect(() => {
        const generateRandomPosition = () => ({
            x: Math.floor(Math.random() * mazeSize),
            y: Math.floor(Math.random() * mazeSize),
        })

        setCheesePosition(generateRandomPosition())

        const mice = []
        for (let i = 0; i < 3; i++) {
            mice.push(generateRandomPosition())
        }
        setMousePositions(mice)
    }, [])

    const handleMove = (direction) => {
        let newPosition = { ...playerPosition }

        if (direction === "up" && playerPosition.y > 0) {
            newPosition.y -= 1
        } else if (direction === "down" && playerPosition.y < mazeSize - 1) {
            newPosition.y += 1
        } else if (direction === "left" && playerPosition.x > 0) {
            newPosition.x -= 1
        } else if (direction === "right" && playerPosition.x < mazeSize - 1) {
            newPosition.x += 1
        }

        setPlayerPosition(newPosition)
        setMoveCount(moveCount + 1)

        checkGameOver(newPosition)
        checkVictory(newPosition)
    }

    const checkGameOver = (newPosition) => {
        mousePositions.forEach((mousePos) => {
            if (newPosition.x === mousePos.x && newPosition.y === mousePos.y) {
                setGameOver(false)
            }
        })
    }

    const checkVictory = (newPosition) => {
        if (newPosition.x === cheesePosition.x && newPosition.y === cheesePosition.y) {
            setVictory(true)
            setGameOver(true)
        }
    }

    const restartGame = () => {
        setPlayerPosition({ x: 0, y: 0 })
        setCheesePosition({ x: Math.floor(Math.random() * mazeSize), y: Math.floor(Math.random() * mazeSize) })
        setMousePositions([])
        setGameOver(false)
        setVictory(false)
        setMoveCount(0)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (gameOver) return
            if (event.key === "ArrowUp" || event.key === "w") handleMove("up")
            if (event.key === "ArrowDown" || event.key === "s") handleMove("down")
            if (event.key === "ArrowLeft" || event.key === "a") handleMove("left")
            if (event.key === "ArrowRight" || event.key === "d") handleMove("right")
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [gameOver, playerPosition])

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="absolute top-4 left-4 text-xl text-gray-800">
                Moves: {moveCount}
            </div>
            <div className="relative w-[500px] h-[500px] border-4 border-gray-800 bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-100">
                {gameOver ? (
                    <Victory isVictory={victory} onRestart={restartGame} />
                ) : (
                    <>
                        <Timer isGameOver={gameOver} />
                        <div
                            className="absolute w-10 h-10 bg-blue-500 rounded-full cursor-pointer"
                            style={{
                                left: `${playerPosition.x * 50}px`,
                                top: `${playerPosition.y * 50}px`,
                            }}
                        />
                        <Cheese position={cheesePosition} checkVictory={checkVictory} />
                        {mousePositions.map((mousePos, index) => (
                            <Mouse
                                key={index}
                                position={mousePos}
                                checkGameOver={checkGameOver}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default Maze