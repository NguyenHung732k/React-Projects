import React, { useState } from 'react'

const StepByStepGuide = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0)

    const goToNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
        }
    }

    const goToPreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg space-y-4">
            <div className="text-2xl font-semibold">Step-by-Step Guide</div>

            <div className="mt-4 space-y-2">
                <p className="text-lg">{steps[currentStep].description}</p>

                {steps[currentStep].input && (
                    <div className="space-y-2">
                        {steps[currentStep].input.map((inputField, index) => (
                            <div key={index} className="flex items-center">
                                <label className="mr-4 text-lg">{inputField.label}:</label>
                                <input
                                    type="number"
                                    value={inputField.value}
                                    onChange={(event) => inputField.onChange(event.target.value)}
                                    className="bg-gray-700 text-white rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <button
                    onClick={goToPreviousStep}
                    disabled={currentStep === 0}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-600"
                >
                    Previous
                </button>

                <button
                    onClick={goToNextStep}
                    disabled={currentStep === steps.length - 1}
                    className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-600"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepByStepGuide