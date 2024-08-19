import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBudget } from '../redux/budgetSlice'



const BudgetForm = () => {

    const dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!amount || !category) return

        dispatch(setBudget({ id: Date.now(), amount, category }))
        setAmount('')
        setCategory('')
    }



    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Set Budget</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    placeholder="Amount"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    placeholder="Category"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Set Budget
                </button>
            </form>
        </div>
    )
}

export default BudgetForm