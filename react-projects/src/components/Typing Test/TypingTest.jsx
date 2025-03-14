import React, { useState, useEffect, useRef } from 'react'
import { wordsList } from './words'
import './TypingTest.css'

const TypingTest = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [typedWord, setTypedWord] = useState('')
    const [wordStatus, setWordStatus] = useState('normal')
    const [startTime, setStartTime] = useState(null)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [finished, setFinished] = useState(false)

    const inputRef = useRef(null)

    const currentWord = wordsList[currentWordIndex]

    useEffect(() => {
        if (finished) return

        const interval = setInterval(() => {
            if (startTime) {
                setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [startTime, finished])

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleInputChange = (event) => {
        const value = event.target.value
        setTypedWord(value)

        if (startTime === null) {
            setStartTime(Date.now())
        }

        if (value === currentWord) {
            setWordStatus('correct')
            setTypedWord('')
            setCurrentWordIndex((prevIndex) => prevIndex + 1)
        } else if (!currentWord.startsWith(value)) {
            setWordStatus('incorrect')
        } else {
            setWordStatus('normal')
        }
    }

    const handleRestart = () => {
        setCurrentWordIndex(0)
        setTypedWord('')
        setWordStatus('normal')
        setStartTime(null)
        setTimeElapsed(0)
        setFinished(false)
    }

    const handleFinish = () => {
        setFinished(true)
        clearInterval()
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white p-6">
            <div className="w-full max-w-2xl bg-black p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-4">Typing Speed Test</h1>

                <div className="text-center">
                    <div className="text-2xl font-semibold mb-2">
                        {currentWord && (
                            <div className="inline-block px-4 py-2 rounded-lg text-lg">
                                <span className={`transition-all ${wordStatus === 'incorrect' ? 'text-red-500' : 'text-white'}`}>
                                    {currentWord}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-center mb-4">
                    <input
                        ref={inputRef}
                        type="text"
                        value={typedWord}
                        onChange={handleInputChange}
                        className={`bg-transparent border-b-4 px-4 py-2 text-center text-xl w-64 rounded-md outline-none transition-all ${wordStatus === 'correct'
                            ? 'border-green-500 text-green-500'
                            : wordStatus === 'incorrect'
                                ? 'border-red-500 text-red-500 animate-pulse'
                                : 'border-white text-white'
                            }`}
                        autoFocus
                        disabled={finished}
                    />
                </div>

                <div className="text-center text-xl font-medium">
                    <div className="mb-2">
                        Time: {timeElapsed}s
                    </div>
                    <div className="mb-4">
                        Words Typed: {currentWordIndex}
                    </div>
                </div>

                {finished ? (
                    <div className="text-center mt-4">
                        <h2 className="text-2xl font-semibold mb-2">Test Completed!</h2>
                        <div className="text-lg mb-4">
                            You typed {currentWordIndex} words in {timeElapsed} seconds.
                        </div>
                        <button
                            onClick={handleRestart}
                            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Restart
                        </button>
                    </div>
                ) : (
                    <div className="text-center mt-4">
                        <button
                            onClick={handleFinish}
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Finish Test
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TypingTest