import React, { useState } from 'react'
import { calculateKineticEnergy } from '../utils/physicsUtils'
import StepByStepGuide from './StepByStepGuide'
import { roundToDecimal } from '../utils/mathUtils'

const KineticEnergySimulation = () => {
    const [mass, setMass] = useState(50)
    const [velocity, setVelocity] = useState(10)
    const [kineticEnergy, setKineticEnergy] = useState(0)

    const steps = [
        {
            description: 'Step 1: Enter the mass of the object (in kilograms).',
            input: [
                {
                    label: 'Mass (kg)',
                    value: mass,
                    onChange: (newValue) => setMass(newValue),
                },
            ],
        },
        {
            description: 'Step 2: Enter the velocity of the object (in meters per second).',
            input: [
                {
                    label: 'Velocity (m/s)',
                    value: velocity,
                    onChange: (newValue) => setVelocity(newValue),
                },
            ],
        },
        {
            description: 'Step 3: Calculate the Kinetic Energy (1/2 * m * v^2).',
            input: [],
        },
        {
            description: `Step 4: Kinetic Energy: ${roundToDecimal(kineticEnergy)} Joules.`,
            input: [],
        },
    ]

    const handleFinalCalculation = () => {
        const energy = calculateKineticEnergy(mass, velocity)
        setKineticEnergy(energy)
    }

    return (
        <div className="p-8 bg-gray-800 text-white rounded-lg shadow-lg space-y-6" >
            <div className="text-2xl font-semibold">Kinetic Energy Simulation</div>

            <StepByStepGuide steps={steps} />

            {kineticEnergy === 0 && (
                <button
                    onClick={handleFinalCalculation}
                    className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                    Calculate Kinetic Energy
                </button>
            )}

            {/* Display the result */}
            {
                kineticEnergy > 0 && (
                    <div className="mt-6 bg-blue-600 text-center p-4 rounded-lg text-lg">
                        <p>Kinetic Energy: {roundToDecimal(kineticEnergy)} Joules</p>
                    </div>
                )
            }
        </div >
    )
}

export default KineticEnergySimulation