import React, { useState } from 'react'
import { useBudget } from './BudgetContext'
import { toast } from 'react-toastify'

const BudgetForm = () => {
    const { setIncome, setExpenses } = useBudget()
    const [newIncome, setNewIncome] = useState('')
    const [newExpense, setNewExpense] = useState('')

    const handleIncomeSubmit = (event) => {
        event.preventDefault()
        if (newIncome) {
            setIncome(prev => prev + parseFloat(newIncome))
            setNewIncome('')
            toast.success("Income added!")
        }
    }

    const handleExpenseSubmit = (event) => {
        event.preventDefault()
        if (newExpense) {
            setExpenses(prev => prev + parseFloat(newExpense))
            setNewExpense('')
            toast.error("Expense added!")
        }
    }

    return (
        <div className="w-2/6 flex flex-col justify-center items-center space-y-4 mx-auto">

            <div className="w-full bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-bold">Add Income</h2>
                <form onSubmit={handleIncomeSubmit} className="flex space-x-2">
                    <input
                        type="number"
                        value={newIncome}
                        onChange={(event) => setNewIncome(event.target.value)}
                        placeholder="Amount"
                        className="flex-1 p-2 border border-gray-300 rounded"
                    />
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200">Add</button>
                </form>
            </div>

            <div className="w-full bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-bold">Add Expense</h2>
                <form onSubmit={handleExpenseSubmit} className="flex space-x-2">
                    <input
                        type="number"
                        value={newExpense}
                        onChange={(event) => setNewExpense(event.target.value)}
                        placeholder="Amount"
                        className="flex-1 p-2 border border-gray-300 rounded"
                    />
                    <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200">Add</button>
                </form>
            </div>
        </div>
    )
}

export default BudgetForm