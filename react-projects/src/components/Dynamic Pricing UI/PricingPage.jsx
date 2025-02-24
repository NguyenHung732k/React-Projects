import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(false)

    // Prices based on billing cycle
    const monthlyPrice = 19
    const yearlyPrice = 199

    const handleToggle = () => {
        setIsYearly(prev => !prev)
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
            <div className="bg-white p-10 rounded-xl shadow-xl w-5/6">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Choose Your Plan</h1>

                <div className="flex justify-center mb-8">
                    <button
                        onClick={handleToggle}
                        className={`px-8 py-3 rounded-full transition-all duration-300 
            ${isYearly ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"}`}
                    >
                        {isYearly ? 'Yearly' : 'Monthly'}
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Plan 1: Basic Plan */}
                    <motion.div
                        className="flex flex-col justify-between items-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-semibold text-center text-gray-700">Basic Plan</h2>
                        <p className="text-center text-gray-500">Perfect for individuals</p>
                        <div className="text-center mt-4">
                            <h3 className="text-4xl font-bold">
                                ${isYearly ? yearlyPrice : monthlyPrice}
                                <span className="text-sm">{isYearly ? '/year' : '/month'}</span>
                            </h3>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-200">
                                Choose Plan
                            </button>
                        </div>
                    </motion.div>

                    {/* Plan 2: Pro Plan (Highlighted) */}
                    <motion.div
                        className="flex flex-col justify-between items-center bg-indigo-600 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-semibold text-center text-white">Pro Plan</h2>
                        <p className="text-center text-gray-200">Best for professionals</p>
                        <div className="text-center mt-4">
                            <h3 className="text-4xl font-bold text-white">
                                ${isYearly ? yearlyPrice : monthlyPrice}
                                <span className="text-sm">{isYearly ? '/year' : '/month'}</span>
                            </h3>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="px-6 py-2 bg-white text-indigo-600 rounded-full hover:bg-gray-200 transition duration-200">
                                Choose Plan
                            </button>
                        </div>
                    </motion.div>

                    {/* Plan 3: Enterprise Plan */}
                    <motion.div
                        className="flex flex-col justify-between items-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl font-semibold text-center text-gray-700">Enterprise Plan</h2>
                        <p className="text-center text-gray-500">For large teams and businesses</p>
                        <div className="text-center mt-4">
                            <h3 className="text-4xl font-bold">
                                ${isYearly ? yearlyPrice * 2 : monthlyPrice * 2}
                                <span className="text-sm">{isYearly ? '/year' : '/month'}</span>
                            </h3>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-200">
                                Choose Plan
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Price Comparison */}
                <motion.div
                    className={`mt-8 text-center text-sm text-gray-500 transition-all duration-500 ${isYearly ? 'opacity-100' : 'opacity-0'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isYearly ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                >
                    <p>Save {Math.round(((monthlyPrice * 12) - yearlyPrice) / (monthlyPrice * 12) * 100)}% with Yearly Billing</p>
                </motion.div>

            </div>
        </div>
    )
}

export default PricingPage