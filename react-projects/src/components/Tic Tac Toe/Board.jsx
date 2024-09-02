import React, { useState } from 'react'
import Square from './Square'

import cross from '../../assets/cross.png'
import circle from '../../assets/circle.png'

const Board = ({ next, squares, onPlay, winner }) => {



    const handleClick = (event, index) => {

        if (squares[index] || winner) {
            return
        }

        const nextSquares = squares.slice()

        if (next) {
            event.target.innerHTML = `<img src=${cross} className="w-full h-full" />`
            nextSquares[index] = "X"
        } else {
            event.target.innerHTML = `<img src=${circle} className="w-full h-full" />`
            nextSquares[index] = "O"

        }
        onPlay(nextSquares)
    }




    return (
        <div className="w-[564px] h-[600px] flex m-auto gap-2">
            <div className="flex flex-col justify-center items-center gap-2">
                <Square onSquareClick={(event) => handleClick(event, 0)} />
                <Square onSquareClick={(event) => handleClick(event, 1)} />
                <Square onSquareClick={(event) => handleClick(event, 2)} />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Square onSquareClick={(event) => handleClick(event, 3)} />
                <Square onSquareClick={(event) => handleClick(event, 4)} />
                <Square onSquareClick={(event) => handleClick(event, 5)} />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <Square onSquareClick={(event) => handleClick(event, 6)} />
                <Square onSquareClick={(event) => handleClick(event, 7)} />
                <Square onSquareClick={(event) => handleClick(event, 8)} />
            </div>
        </div>
    )
}

export default Board