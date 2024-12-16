import React, { useState } from 'react'

const solveSudoku = (board) => {
    const findEmpty = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) return { row, col }
            }
        }
        return null // No empty cells left
    }

    const isValid = (board, num, row, col) => {
        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false
        }

        // Check 3x3 subgrid
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false
            }
        }

        return true
    }

    const solve = () => {
        const emptyCell = findEmpty()
        if (!emptyCell) return true // Puzzle solved

        const { row, col } = emptyCell

        for (let num = 1; num <= 9; num++) {
            if (isValid(board, num, row, col)) {
                board[row][col] = num;

                if (solve()) return true // Continue solving recursively

                board[row][col] = 0 // Backtrack if not valid
            }
        }
        return false // No valid number found
    };

    solve()
    return board
}

const SudokuSolver = () => {
    const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)))
    const [solvedBoard, setSolvedBoard] = useState(null)
    const [invalidCells, setInvalidCells] = useState(new Set())

    const handleChange = (e, row, col) => {
        const value = e.target.value;
        if (value === "" || (value >= 1 && value <= 9)) {
            const newBoard = [...board];
            newBoard[row][col] = value === "" ? 0 : parseInt(value);
            setBoard(newBoard);
            setInvalidCells(new Set()) // Clear invalid cells after a valid input
        } else {
            // Show invalid input by highlighting the cell
            setInvalidCells((prev) => new Set(prev).add(`${row}-${col}`))
        }
    }

    // Handle solving the entire board
    const handleSolve = () => {
        const solved = solveSudoku(board) // Solves the entire puzzle
        setSolvedBoard(solved)
    }

    return (
        <div className="flex flex-col items-center p-4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Sudoku Solver</h1>
                <p className="text-lg text-center text-gray-600">Enter your puzzle and solve it easily!</p>
            </div>

            <div className="grid grid-cols-9 gap-1 mb-4 border-4 border-gray-500 rounded-lg p-2">
                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <input
                            key={`${rowIndex}-${colIndex}`}
                            type="text"
                            min="1"
                            max="9"
                            value={cell === 0 ? "" : cell}
                            onChange={(event) => handleChange(event, rowIndex, colIndex)}
                            className={`w-16 h-16 text-center border-2 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 
                ${invalidCells.has(`${rowIndex}-${colIndex}`) ? 'border-red-500 bg-red-100' : 'border-gray-300 bg-white'}`}
                        />
                    ))
                )}
            </div>

            <div className="flex space-x-4 mt-6">
                <button
                    onClick={handleSolve}
                    className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                >
                    Solve
                </button>
            </div>
        </div>
    )
}

export default SudokuSolver