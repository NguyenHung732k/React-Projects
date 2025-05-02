import React, { useState } from 'react'

const PricingCard = ({ plan, isRecommended, selectedPeriod }) => {
    const [expanded, setExpanded] = useState(false)

    const price = selectedPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice

    return (
        <div
            className={`relative p-6 rounded-xl shadow-lg transition-all transform hover:scale-105 ${isRecommended ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white' : 'bg-white text-black'}`}
        >
            {/* Plan Name */}
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-gray-300 text-sm">{plan.description}</p>

            {/* Price */}
            <div className="mt-4 text-4xl font-bold">
                ${price} <span className="text-lg">{selectedPeriod === 'monthly' ? '/ month' : '/ year'}</span>
            </div>

            {/* Features Toggle */}
            <div className="mt-4">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={`${isRecommended ? "text-white" : "text-blue-500"} font-medium hover:bg-transparent cursor-pointer text-decoration-none transition-all duration-300`}
                >
                    {expanded ? 'Hide Features' : 'Show Features'}
                </button>

                {/* Expand/Collapse Features List */}
                <div className={`mt-2 ${expanded ? 'max-h-40 overflow-y-auto' : 'max-h-0 overflow-hidden'} transition-all duration-500`}>
                    <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Recommended Tag */}
            {isRecommended && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-black font-semibold text-sm rounded-lg">
                    Recommended
                </span>
            )}
        </div>
    )
}

export default PricingCard