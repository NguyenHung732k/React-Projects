import React, { useState } from 'react'
import clsx from 'clsx'
import ProgressBar from './ProgressBar'

const Stepper = ({ steps, orientation = "horizontal", customColors = {}, children }) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isValid, setIsValid] = useState(Array(steps.length).fill(true))

    const handleNext = () => {
        const step = steps[currentStep]
        if (step?.validate && !step.validate()) {
            setIsValid((prev) => {
                const updated = [...prev]
                updated[currentStep] = false
                return updated
            })
            return
        }
        setIsValid((prev) => {
            const updated = [...prev]
            updated[currentStep] = true
            return updated
        })
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0))
    }

    return (
        <div className={clsx("flex flex-col gap-8 items-center", orientation === "vertical" ? "space-y-4" : "space-x-4")}>
            <div className={clsx("flex items-center gap-4", orientation === "vertical" ? "flex-col" : "flex-row")}>
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-center gap-2">
                        <div
                            className={clsx(
                                "rounded-full p-3 border-4",
                                index < currentStep
                                    ? `border-${customColors?.completed || 'blue'} bg-${customColors?.completed || 'blue'}-100`
                                    : index === currentStep
                                        ? `border-${customColors?.active || 'blue'} bg-${customColors?.active || 'blue'}-500`
                                        : `border-${customColors?.inactive || 'gray'} bg-${customColors?.inactive || 'gray'}-200`
                            )}
                        >
                            {step.icon}
                        </div>
                        <span className={clsx(index < currentStep ? "text-blue-600" : "text-gray-500", "text-sm")}>
                            {step.label}
                        </span>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-1 bg-gray-200 mx-2 relative">
                                <div
                                    className="h-full bg-blue-500"
                                    style={{ width: currentStep > index ? "100%" : "0%" }}
                                ></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out",
                    currentStep === 0 ? "opacity-100" : "opacity-0"
                )}
            >
                {children[currentStep]}
            </div>

            <ProgressBar progress={(currentStep + 1) / steps.length * 100} />

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleBack}
                    className={clsx(
                        "px-6 py-3 rounded-md border-2",
                        currentStep === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-800"
                    )}
                    disabled={currentStep === 0}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className={clsx(
                        "px-6 py-3 rounded-md text-white font-semibold",
                        isValid[currentStep] ? "bg-blue-600" : "bg-gray-300 cursor-not-allowed"
                    )}
                    disabled={!isValid[currentStep] || currentStep === steps.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Stepper