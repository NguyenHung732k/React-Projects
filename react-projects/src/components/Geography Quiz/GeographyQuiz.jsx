import React, { useState, useEffect } from 'react'
import MapQuiz from './MapQuiz'
import Timer from './Timer'

function GeographyQuiz() {
    const [quizStarted, setQuizStarted] = useState(false)
    const [score, setScore] = useState(0)
    const [quizOver, setQuizOver] = useState(false)

    const startQuiz = () => {
        setScore(0)
        setQuizStarted(true)
        setQuizOver(false)
    }

    const endQuiz = () => {
        setQuizOver(true)
    }

    return (
        <div className="App bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen text-white">
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-5xl font-extrabold text-center mb-8 text-white drop-shadow-md">
                    Geography Challenge
                </h1>

                {!quizStarted && !quizOver ? (
                    <div className="text-center">
                        <p className="text-lg mb-4">Test your geography knowledge with this fun quiz!</p>
                        <button
                            className="px-6 py-3 bg-yellow-500 text-black rounded-full text-xl hover:bg-yellow-400 transition-all"
                            onClick={startQuiz}
                        >
                            Start Quiz
                        </button>
                    </div>
                ) : quizOver ? (
                    <div className="text-center">
                        <h2 className="text-3xl mb-4">Quiz Over!</h2>
                        <p className="text-xl mb-4">Your final score is: {score}</p>
                        <button
                            className="px-6 py-3 bg-green-500 text-white rounded-full text-xl hover:bg-green-400 transition-all"
                            onClick={startQuiz}
                        >
                            Play Again
                        </button>
                    </div>
                ) : (
                    <>
                        <Timer endQuiz={endQuiz} />
                        <MapQuiz setScore={setScore} score={score} endQuiz={endQuiz} />
                        <div className="text-center mt-6">
                            <h2 className="text-2xl">Score: {score}</h2>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default GeographyQuiz