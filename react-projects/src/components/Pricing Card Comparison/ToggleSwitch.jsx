import React from 'react'

const ToggleSwitch = ({ selectedPeriod, setSelectedPeriod }) => {
    return (
        <div className="flex items-center justify-center mt-6 space-x-4">
            <button
                className={`px-5 py-2 rounded-full text-lg font-medium transition-all duration-300 ${selectedPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedPeriod('monthly')}
            >
                Monthly
            </button>
            <button
                className={`px-5 py-2 rounded-full text-lg font-medium transition-all duration-300 ${selectedPeriod === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setSelectedPeriod('yearly')}
            >
                Yearly
            </button>
        </div>
    )
}

export default ToggleSwitch