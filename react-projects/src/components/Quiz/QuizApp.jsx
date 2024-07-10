import React, { useState } from 'react'

import Question from './Question'
import questions from './questions'
import Score from './Score'

import './QuizStyles.css'

const QuizApp = () => {

    const [score, setScore] = useState(0)
    const [selectedOption, setSelectedOption] = useState("")
    const [endQuiz, setEndQuiz] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)


    const handleSubmit = (event) => {
        event.preventDefault()
        checkAnswer()
        nextQuestion()
    }

    const checkAnswer = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1)
        }
    }

    const nextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedOption("")
        } else {
            setEndQuiz(true)
        }
    }




    return (
        <div className="quiz-container">
            <h1 className="app-title">Quiz App</h1>
            <div className="w-100 d-flex flex-column align-items-start justify-content-center">
                {!endQuiz ? (
                    <Question
                        question={questions[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={(event) => setSelectedOption(event.target.value)}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <Score
                        score={score}
                        onNextQuestion={nextQuestion}
                        className="score"
                    />
                )}
            </div>
        </div>
    )
}

export default QuizApp