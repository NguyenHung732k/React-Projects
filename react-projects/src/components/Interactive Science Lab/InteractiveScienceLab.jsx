import React from 'react'
import Sidebar from './Sidebar'
import LabArea from './LabArea'
import ExperimentGuide from './ExperimentGuide'
import Results from './Results'
import Quiz from './Quiz'
import Header from './Header'

const InteractiveScienceLab = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <Header />
                <LabArea />
                <ExperimentGuide />
                <Results />
                <Quiz />
            </div>
        </div>
    )
}

export default InteractiveScienceLab