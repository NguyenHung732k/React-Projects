import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeBudget } from '../redux/budgetSlice'


const BudgetList = () => {

    const dispatch = useDispatch()
    const budgets = useSelector(state => state.budget)

    const handleRemove = (id) => {
        dispatch(removeBudget(id))
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Budgets</h2>
            <ul className="space-y-2">
                {budgets.map(budget => (
                    <li key={budget.id} className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                        <span>{budget.category}: ${budget.amount}</span>
                        <button
                            onClick={() => handleRemove(budget.id)}
                            className="text-red-600 hover:text-red-700 transition duration-300"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BudgetList