import React from 'react'
import { useBudget } from './BudgetContext'

const ProgressTracker = () => {
    const { income, expenses } = useBudget()
    const balance = income - expenses
    const percentage = income ? ((balance / income) * 100).toFixed(2) : 0

    return (
        <div className="w-3/6 mt-6 bg-white shadow-md rounded-lg p-4 mx-auto">
            <h2 className="text-lg font-bold">Progress Tracker</h2>
            <div className="relative w-full h-6 bg-gray-200 rounded">
                <div
                    className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="mt-2">{`Balance: $${balance.toFixed(2)} (${percentage}%)`}</p>
            <p className={`mt-2 font-semibold ${balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                {balance < 0 ? 'Overspending!' : 'Great job! Keep it up!'}
            </p>
        </div>
    )
}

export default ProgressTracker