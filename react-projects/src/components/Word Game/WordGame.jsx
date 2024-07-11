import React, { useEffect, useState } from 'react'

import './WordGameStyles.css'

import words from './words'

const WordGame = () => {
    const randomWords = () => {
        const random = Math.floor(Math.random() * words.length)
        return words[random]
    }

    const [word, setWord] = useState(randomWords())
    const [message, setMessage] = useState("")
    const [chosenLetters, setChosenLetters] = useState([])
    const [hints, setHints] = useState(3)
    const [displayWord, setDisplayWord] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [wrongGuesses, setWrongGuesses] = useState(0)

    useEffect(() => {
        if (wrongGuesses >= 5) {
            window.alert("Too many wrong guesses!")

        }
    }, [wrongGuesses])


    const letterSelection = (letter) => {
        if (!chosenLetters.includes(letter)) {
            setChosenLetters([...chosenLetters, letter])

            if (!word.word.includes(letter)) {
                setWrongGuesses(wrongGuesses + 1)
            }
        }
    }

    const hint = () => {
        if (hints > 0) {
            const letterIndex = word.word.split("").findIndex((letter) => !chosenLetters.includes(letter))
            setChosenLetters([...chosenLetters, word.word[letterIndex]])
            setHints(hints - 1)
        }
    }

    const removeCharacter = () => {
        setChosenLetters(chosenLetters.slice(0, -1));
    }

    const displayLetter = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        return letters.split("").map((letter, index) => (
            <button
                key={index}
                onClick={() => letterSelection(letter)}
                disabled={chosenLetters.includes(letter)}
                className={`letter-button ${chosenLetters.includes(letter) ? "letter-button-selected" : ""}`}
            >
                {letter}
            </button>
        ))
    }

    const checkWordGuessed = () => {
        return word.word.split("").every((letter) => chosenLetters.includes(letter));
    }

    const guess = () => {
        if (checkWordGuessed()) {
            setMessage("You have guessed the word correctly!");
        } else {
            setMessage("Try again!");
            setDisplayWord(true);
        }
    }

    const restartGame = () => {
        setWord(randomWords())
        setMessage("")
        setChosenLetters([])
        setHints(3)
        setDisplayWord(false)
        setGameOver(false)
        setWrongGuesses(0)
    }


    return (
        <div className="word-game-container">
            <h1 style={{ fontWeight: 'bold' }}>Guess The Word</h1>
            <div className="word-container">
                {word.word.split("").map((letter, index) => (
                    <div
                        key={index}
                        className={`word-game-letter ${chosenLetters.includes(letter) ? "word-game-letter-visible" : ""}`}
                    >
                        {chosenLetters.includes(letter) ? letter : ""}
                    </div>
                ))}
            </div>

            <p className="word-description">Hint: {word.description}</p>
            {message && (
                <div className="word-game-message">
                    <p>{message}</p>
                    {displayWord && <p>Correct word was: {word.word}</p>}
                </div>
            )}

            <div className="word-game-button">
                <div className="word-game-letter-selection">
                    {displayLetter()}
                </div>


                <div className="word-game-button-container">
                    <button
                        onClick={restartGame}
                        className="word-game-restart-button"
                    >
                        Restart
                    </button>
                    <button
                        onClick={removeCharacter}
                        disabled={!chosenLetters.length}
                        className="word-game-remove-button"
                    >
                        Remove Letter
                    </button>


                    <button
                        onClick={hint}
                        disabled={hints === 0}
                        className="word-game-hint-button"
                    >
                        Get Hint: {hints}
                    </button>

                    {!message && (
                        <button
                            onClick={guess}
                            disabled={!chosenLetters.length}
                            className="word-game-guess-button"
                        >
                            Guess
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default WordGame