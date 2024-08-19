import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../redux/expenseSlice'

const ExpenseForm = () => {

    const dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!amount || !description) return

        dispatch(addExpense({ id: Date.now(), amount, description }))
        setAmount('')
        setDescription('')
    }



    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
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
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Description"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Add Expense
                </button>
            </form>
        </div>
    )
}

export default ExpenseForm