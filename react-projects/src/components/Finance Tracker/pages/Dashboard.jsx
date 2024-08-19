import React from 'react'
import FinancialSummary from '../components/FinancialSummary'
import Chart from '../components/Chart'
import BudgetForm from '../components/BudgetForm'
import BudgetList from '../components/BudgetList'
import IncomeForm from '../components/IncomeForm'
import ExpenseForm from '../components/ExpenseForm'
import { useSelector } from 'react-redux'


const Dashboard = () => {

    const incomes = useSelector(state => state.income)
    const expenses = useSelector(state => state.expense)
    const budgets = useSelector(state => state.budget)

    const totalIncome = incomes.reduce((sum, income) => sum + Number(income.amount), 0)
    const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0)

    const chartData = [
        { label: 'Income', value: totalIncome },
        { label: 'Expenses', value: totalExpenses }
    ]

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <FinancialSummary />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <Chart data={chartData} />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <IncomeForm />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <ExpenseForm />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <BudgetForm />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <BudgetList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard