import { useState } from 'react'
import BudgetChart from './BudgetChart'
import ExpenseForm from './ExpenseForm'
import Forecast from './Forecast'
import OverspendingAlert from './OverspendingAlert'

const FinanceVisualizer = () => {
    const [expenses, setExpenses] = useState([])
    const [income, setIncome] = useState(1000)
    const [budget, setBudget] = useState(800)

    const handleAddExpense = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense])
    }

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0)

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center">
                    Personal Finance Visualizer
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Budget Overview</h2>
                        <BudgetChart data={{ income, expenses: totalExpenses }} />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Add an Expense</h2>
                        <ExpenseForm onAddExpense={handleAddExpense} />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Financial Forecast</h2>
                        <Forecast currentMonthBudget={budget} growthRate={0.05} />
                    </div>
                </div>

                <div className="mt-8">
                    <OverspendingAlert budget={budget} expenses={expenses} />
                </div>
            </div>
        </div>
    )
}

export default FinanceVisualizer