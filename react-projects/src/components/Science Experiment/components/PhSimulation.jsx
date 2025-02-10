import React, { useState } from 'react'
import { calculatePH } from '../utils/chemistryUtils'
import StepByStepGuide from './StepByStepGuide'
import { roundToDecimal } from '../utils/mathUtils'

const PhSimulation = () => {
    const [hydrogenIonConcentration, setHydrogenIonConcentration] = useState(0.0001)
    const [pH, setPH] = useState(0)

    const steps = [
        {
            description: 'Step 1: Enter the H+ Ion Concentration (in mol/L).',
            input: [
                {
                    label: 'H+ Ion Concentration (mol/L)',
                    value: hydrogenIonConcentration,
                    onChange: (newValue) => setHydrogenIonConcentration(newValue),
                },
            ],
        },
        {
            description: 'Step 2: Calculate the pH value (-log[H+]).',
            input: [],
        },
        {
            description: `Step 3: pH: ${roundToDecimal(pH)}.`,
            input: [],
        },
    ]

    const handleFinalCalculation = () => {
        const pHValue = calculatePH(hydrogenIonConcentration)
        setPH(pHValue)
    }

    return (
        <div className="p-8 bg-gray-800 text-white rounded-lg shadow-lg space-y-6">
            <div className="text-2xl font-semibold">pH Simulation</div>

            <StepByStepGuide steps={steps} />

            {pH === 0 && (
                <button
                    onClick={handleFinalCalculation}
                    className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                    Calculate pH
                </button>
            )}

            {pH > 0 && (
                <div className="mt-6 bg-blue-600 text-center p-4 rounded-lg text-lg">
                    <p>pH: {roundToDecimal(pH)}</p>
                </div>
            )}
        </div>
    )
}

export default PhSimulation