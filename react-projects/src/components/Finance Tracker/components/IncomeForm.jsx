import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIncome } from '../redux/incomeSlice'


const IncomeForm = () => {

    const dispatch = useDispatch()
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!amount || !description) return

        dispatch(addIncome({ id: Date.now(), amount, description }))
        setAmount('')
        setDescription('')
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Add Income</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Add Income
                </button>
            </form>
        </div>
    )
}

export default IncomeForm