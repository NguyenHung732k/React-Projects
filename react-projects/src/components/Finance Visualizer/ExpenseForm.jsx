import { useState } from 'react'

const ExpenseForm = ({ onAddExpense }) => {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (description && amount && category) {
            onAddExpense({ description, amount: parseFloat(amount), category });

            setDescription('')
            setAmount('')
            setCategory('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
            </div>
            <div>
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                </select>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm
