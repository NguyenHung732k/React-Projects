import React from 'react'
import { useSelector } from 'react-redux'


const FinancialSummary = () => {

    const incomes = useSelector(state => state.income)
    const expenses = useSelector(state => state.expense)

    const totalIncome = incomes.reduce((sum, income) => sum + Number(income.amount), 0)
    const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0)
    const totalSavings = totalIncome - totalExpenses


    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Financial Summary</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Total Income:</span>
                    <span className="text-green-600">${totalIncome}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Total Expenses:</span>
                    <span className="text-red-600">${totalExpenses}</span>
                </div>
                <div className="flex justify-between font-bold">
                    <span>Total Savings:</span>
                    <span className={`${totalSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${totalSavings}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FinancialSummary