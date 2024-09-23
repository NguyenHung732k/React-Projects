import React from 'react'
import { BudgetProvider } from './BudgetContext'
import BudgetForm from './BudgetForm'
import ProgressTracker from './ProgressTracker'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BudgetGame = () => {
    return (
        <BudgetProvider>
            <div className="w-full mx-auto p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-6">Personal Budgeting Game</h1>
                <BudgetForm />
                <ProgressTracker />
                <ToastContainer />
            </div>
        </BudgetProvider>
    )
}

export default BudgetGame