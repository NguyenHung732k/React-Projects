import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BasicInfo from './BasicInfo'
import SurveyQuestions from './SurveyQuestions'
import DisplayAnswers from './DisplayAnswers'
import FinalPage from './FinalPage'

const SurveyForm = () => {


    const initBasicData = JSON.parse(localStorage.getItem('data')) || {}
    const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {}

    const [basicData, setBasicData] = useState(initBasicData)
    const [questionData, setQuestionData] = useState(initQuestionsData)

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(basicData));
    }, [basicData])


    useEffect(() => {
        localStorage.setItem('questiondata', JSON.stringify(questionData))
    }, [questionData])


    const addBasicData = (name, email, contact) => {
        const myBasicData = {
            name: name,
            email: email,
            contact: contact
        }
        setBasicData(myBasicData)

        localStorage.setItem("data", JSON.stringify(myBasicData))
    }

    const addQuestionData = (selection) => {
        setQuestionData(selection)

        localStorage.setItem("questiondata", JSON.stringify(selection))
    }

    return (
        <Router>
            <Routes>
                <Route path='/' element={<BasicInfo addBasicInfo={addBasicData} />} />
                <Route path='/questions' element={<SurveyQuestions addQuestionData={addQuestionData} />} />
                <Route path='/details' element={<DisplayAnswers data={basicData} answers={questionData} />} />
                <Route path='/thanks' element={<FinalPage />} />
            </Routes>
        </Router>
    )
}

export default SurveyForm