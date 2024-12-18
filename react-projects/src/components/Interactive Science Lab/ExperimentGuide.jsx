import React from 'react'

const ExperimentGuide = () => {
    const steps = [
        { instruction: 'Gather all necessary tools and materials.' },
        { instruction: 'Place the beaker on the table and fill it with water.' },
        { instruction: 'Heat the water using the Bunsen Burner.' },
    ]

    return (
        <div className="experiment-guide mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Experiment Guide</h2>
            {steps.map((step, index) => (
                <div key={index} className="step mb-4">
                    <p>{step.instruction}</p>
                </div>
            ))}
        </div>
    )
}

export default ExperimentGuide