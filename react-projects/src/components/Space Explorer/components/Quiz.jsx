import { useState } from 'react'

const Quiz = () => {
    const [score, setScore] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')

    const question = 'What is the largest planet in our solar system?'
    const answers = ['Jupiter', 'Mars', 'Earth', 'Saturn']
    const correctAnswer = 'Jupiter'

    const handleSubmit = (answer) => {
        setUserAnswer(answer)
        if (answer === correctAnswer) {
            setScore(score + 1)
        }
        setAnswered(true)
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl text-center mb-4">Space Quiz</h2>
            <p className="text-lg">{question}</p>

            <div className="mt-4 space-y-4">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleSubmit(answer)}
                        className="w-full p-4 text-lg bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        {answer}
                    </button>
                ))}
            </div>

            {answered && (
                <div className="mt-6 text-center">
                    <p className={`text-xl ${userAnswer === correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                        {userAnswer === correctAnswer ? 'Correct!' : `Wrong. The correct answer is ${correctAnswer}`}
                    </p>
                    <p className="mt-2 text-lg">Your score: {score}</p>
                </div>
            )}
        </div>
    )
}

export default Quiz