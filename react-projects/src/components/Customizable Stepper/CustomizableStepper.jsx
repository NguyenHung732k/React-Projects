import React, { useState } from 'react'
import Stepper from './Stepper'
import StepContent from './StepContent'
import { FaUser, FaShippingFast, FaClipboard } from 'react-icons/fa'

const CustomizableStepper = () => {
    const steps = [
        { label: "Personal Info", icon: <FaUser />, validate: () => true },
        { label: "Shipping", icon: <FaShippingFast />, validate: () => true },
        { label: "Review", icon: <FaClipboard />, validate: () => true },
    ]

    return (
        <div className="container mx-auto mt-10 p-4">
            <Stepper
                steps={steps}
                customColors={{
                    completed: 'green',
                    active: 'blue',
                    inactive: 'gray'
                }}
                orientation="horizontal"
            >
                <StepContent>
                    <h2>Step 1: Enter Personal Info</h2>
                    {/* Add form inputs here */}
                </StepContent>
                <StepContent>
                    <h2>Step 2: Shipping Address</h2>
                    {/* Add shipping form here */}
                </StepContent>
                <StepContent>
                    <h2>Step 3: Review Your Info</h2>
                    {/* Add review form here */}
                </StepContent>
            </Stepper>
        </div>
    )
}

export default CustomizableStepper