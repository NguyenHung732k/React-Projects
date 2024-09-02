import React, { useState } from 'react'
import Board from './Board'



const TicTacToe = () => {

    const [squares, setSquares] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const next = currentMove % 2 === 0
    const currentSquares = squares[currentMove]

    const handlePlay = (nextSquare) => {
        const nextSquares = [...squares.slice(0, currentMove + 1), nextSquare]
        setSquares(nextSquares)
        setCurrentMove(nextSquares.length - 1)
    }

    const handleReset = () => {
        setSquares([Array(9).fill(null)])
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }


    const winner = calculateWinner(currentSquares)
    let status
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (next ? 'X' : 'O')
    }


    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="my-20">Tic Tac Toe</h1>
            <h2 className="status">{status}</h2>

            <Board next={next} squares={currentSquares} onPlay={handlePlay} winner={winner} />
        </div>
    )
}

export default TicTacToe