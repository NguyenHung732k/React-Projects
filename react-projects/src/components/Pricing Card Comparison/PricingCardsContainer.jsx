import React, { useState } from 'react'
import PricingCard from './PricingCard'
import ToggleSwitch from './ToggleSwitch'

const PricingCardsContainer = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('monthly')

    const plans = [
        {
            name: 'Basic Plan',
            description: 'For small teams and startups',
            monthlyPrice: 19,
            yearlyPrice: 199,
            features: ['1 GB Storage', '10 Users', 'Email Support'],
        },
        {
            name: 'Standard Plan',
            description: 'For growing teams',
            monthlyPrice: 49,
            yearlyPrice: 499,
            features: ['5 GB Storage', '50 Users', 'Priority Support'],
        },
        {
            name: 'Premium Plan',
            description: 'For large businesses',
            monthlyPrice: 99,
            yearlyPrice: 999,
            features: ['Unlimited Storage', 'Unlimited Users', '24/7 Support'],
        },
    ]

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h2>
            <ToggleSwitch selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        plan={plan}
                        isRecommended={index === 2} // Highlight the Premium plan
                        selectedPeriod={selectedPeriod}
                    />
                ))}
            </div>
        </div>
    )
}

export default PricingCardsContainer