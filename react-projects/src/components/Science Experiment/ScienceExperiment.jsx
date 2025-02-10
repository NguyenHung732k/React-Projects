import React, { useState } from 'react'
import ExperimentCard from './components/ExperimentCard'
import KineticEnergySimulation from './components/KineticEnergySimulation'
import PhSimulation from './components/PhSimulation'

const ScienceExperiment = () => {
    const [selectedExperiment, setSelectedExperiment] = useState(null)

    const handleExperimentSelection = (experiment) => {
        setSelectedExperiment(experiment)
    }
    

    return (
        <div className="bg-gray-800 text-white min-h-screen">
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Choose an Experiment
                </h1>

                {selectedExperiment === null ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ExperimentCard
                            title="Kinetic Energy Calculation"
                            description="Simulate and calculate the Kinetic Energy of an object."
                            onStart={() => handleExperimentSelection('kineticEnergy')}
                        />
                        <ExperimentCard
                            title="pH Calculation"
                            description="Simulate and calculate the pH of a solution."
                            onStart={() => handleExperimentSelection('phCalculation')}
                        />
                    </div>
                ) : (
                    <div className="space-y-6">
                        {selectedExperiment === 'kineticEnergy' && <KineticEnergySimulation />}
                        {selectedExperiment === 'phCalculation' && <PhSimulation />}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ScienceExperiment