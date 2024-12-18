import React, { useState } from 'react'

const Quiz = () => {
    const questions = [
        {
            id: 1,
            text: 'What is the boiling point of water?',
            options: ['100°C', '90°C', '80°C'],
            correct: '100°C',
        },
        {
            id: 2,
            text: 'What tool is used to measure liquid volume?',
            options: ['Beaker', 'Test Tube', 'Thermometer'],
            correct: 'Beaker',
        },
    ]

    const [answers, setAnswers] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleAnswerChange = (questionId, answer) => {
        setAnswers({
            ...answers,
            [questionId]: answer,
        })
    }

    const handleSubmit = () => {
        setIsSubmitted(true)
    }

    return (
        <div className="quiz">
            <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
            {questions.map((question) => (
                <div key={question.id} className="mb-4">
                    <p className="font-medium">{question.text}</p>
                    <div className="space-y-2">
                        {question.options.map((option) => (
                            <label key={option} className="block">
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    onChange={() => handleAnswerChange(question.id, option)}
                                    checked={answers[question.id] === option}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700"
            >
                Submit Quiz
            </button>

            {isSubmitted && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Quiz Results</h3>
                    <ul>
                        {questions.map((question) => (
                            <li key={question.id} className="flex justify-between mb-2">
                                <span>{question.text}</span>
                                <span>{answers[question.id] === question.correct ? 'Correct' : 'Incorrect'}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Quiz