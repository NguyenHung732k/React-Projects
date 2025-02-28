import React, { useState } from 'react'
import Header from './components/Header'
import DifficultySelector from './components/DifficultySelector'
import GenerateButton from './components/GenerateButton'
import ProblemCard from './components/ProblemCard'
import { generateSteps } from './utils/mathUtils'

const MathTutor = () => {
    const [difficulty, setDifficulty] = useState('')
    const [steps, setSteps] = useState([])
    const [graphData, setGraphData] = useState({ x: [], y: [] })

    const generateProblem = () => {
        const steps = generateSteps(difficulty)
        setSteps(steps)

        if (difficulty === 'hard') {
            setGraphData({ x: [1, 2, 3], y: [1, 4, 9] })
        } else {
            setGraphData({ x: [1, 2], y: [2, 4] })
        }
    }

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <Header />

            <DifficultySelector level={difficulty} setDifficulty={setDifficulty} />
            
            <GenerateButton onGenerate={generateProblem} />

            {steps.length > 0 && (
                <ProblemCard
                    problemTitle="Solve the equation"
                    steps={steps}
                    graphData={graphData}
                />
            )}
        </div>
    )
}

export default MathTutor