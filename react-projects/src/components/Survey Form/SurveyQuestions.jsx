import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import surveys from './survey.js'

import QuestionList from './QuestionList.jsx'

const SurveyQuestions = ({ addQuestionData }) => {

    const [selection, setSelection] = useState("")
    // const [others, setOthers] = useState("")
    const [answers, setAnswers] = useState([])
    const [endSurvey, setEndSurvey] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)


    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        addQuestionData(answers)
        navigate('/details')
    }

    const handleSubmitQuestion = (event) => {
        event.preventDefault()
        setAnswers([...answers, selection])
        nextQuestion()
    }


    const nextQuestion = () => {
        if (currentQuestion + 1 < surveys.length) {
            setCurrentQuestion(currentQuestion + 1)
            setSelection("")
        } else {
            setEndSurvey(true)
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-[600px] h-[500px] flex flex-col justify-evenly items-start p-4 border border-solid border-gray rounded-lg bg-white/45 backdrop-blur-xl">
                {!endSurvey ? (
                    <QuestionList
                        question={surveys[currentQuestion]}
                        selectedOption={selection}
                        onOptionChange={(event) => setSelection(event.target.value)}
                        onSubmit={handleSubmitQuestion}
                    />
                ) : (
                    <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full mt-4 px-5 py-2.5 text-center">
                        Submit
                    </button>
                )}
            </div>
        </div>
    )
}

export default SurveyQuestions