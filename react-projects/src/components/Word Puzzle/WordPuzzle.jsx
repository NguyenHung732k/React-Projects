import React, { useState, useRef, useEffect } from 'react'

const wordList = [
    { word: 'manzana', hint: 'A fruit' },
    { word: 'perro', hint: 'A domesticated animal' },
    { word: 'casa', hint: 'A building where people live' },
    { word: 'casa', hint: 'A building where people live' },
]

const WordPuzzle = () => {
    const inputRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentWord, setCurrentWord] = useState(wordList[0])
    const [scrambledWord, setScrambledWord] = useState(
        currentWord.word.split('').sort(() => Math.random() - 0.5).join('')
    )
    const [userInput, setUserInput] = useState('')
    const [score, setScore] = useState(0)
    const [gameStatus, setGameStatus] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [currentIndex])

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsDisabled(true)

        if (userInput.toLowerCase() === currentWord.word) {
            setScore(score + 1)
            setGameStatus('Correct!')
        } else {
            setGameStatus('Incorrect!')
        }

        setTimeout(() => {
            if (currentIndex < wordList.length - 1) {
                const nextIndex = currentIndex + 1
                setCurrentIndex(nextIndex)
                setCurrentWord(wordList[nextIndex])
                setScrambledWord(wordList[nextIndex].word.split('').sort(() => Math.random() - 0.5).join(''))
                setUserInput('')
                setGameStatus('')
                setIsDisabled(false)
            } else {
                setGameOver(true)
                setGameStatus('')
                setIsDisabled(true)
            }
        }, 1500)
    }

    const restartGame = () => {
        setScore(0)
        setGameOver(false)
        setCurrentIndex(0)
        setCurrentWord(wordList[0])
        setScrambledWord(wordList[0].word.split('').sort(() => Math.random() - 0.5).join(''))
        setUserInput('')
        setGameStatus('')
        setIsDisabled(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-300 to-pink-400 flex flex-col items-center justify-center p-6">
            {!gameOver ? (
                <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg transition-all transform">
                    <h1 className="text-4xl font-semibold mb-6 text-center text-indigo-700">Word Puzzle</h1>
                    <p className="text-lg mb-4 text-center text-gray-600">Unscramble the letters to form a word</p>
                    <p className="text-sm text-gray-500 mb-6 text-center">Hint: {currentWord.hint}</p>
                    <div className="text-3xl font-bold text-center mb-4">
                        <span className="text-purple-600">{scrambledWord}</span>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full px-6 py-3 text-lg rounded-lg border-2 border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Your answer"
                            value={userInput}
                            onChange={(event) => setUserInput(event.target.value)}
                            disabled={isDisabled}
                        />
                        <button
                            type="submit"
                            className={`w-full bg-blue-500 text-white py-3 rounded-lg transition-colors duration-300 transform hover:bg-blue-700 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isDisabled}
                        >
                            Submit
                        </button>
                    </form>

                    <div className="mt-6 text-xl text-center">
                        <p className={`font-semibold ${gameStatus === 'Correct!' ? 'text-green-500' : 'text-red-500'}`}>{gameStatus}</p>
                        <p className="mt-2">Score: {score}</p>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg transition-all transform hover:scale-105">
                    <h1 className="text-4xl font-semibold mb-6 text-center text-indigo-700">Game Over</h1>
                    <p className="text-lg mb-4 text-center text-gray-600">You have completed the game!</p>
                    <p className="text-2xl font-semibold text-center text-gray-700 mb-4">Final Score: {score}</p>
                    <button
                        onClick={restartGame}
                        className="w-full bg-green-500 text-white py-3 rounded-lg transition-colors duration-300 transform hover:bg-green-700"
                    >
                        Restart Game
                    </button>
                </div>
            )}
        </div>
    )
}

export default WordPuzzle