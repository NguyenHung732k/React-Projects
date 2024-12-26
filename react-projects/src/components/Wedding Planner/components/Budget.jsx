import React, { useState } from 'react'

function Budget() {
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [expenses, setExpenses] = useState([])

    const addExpense = () => {
        if (category && amount) {
            setExpenses([...expenses, { id: Date.now(), category, amount: parseFloat(amount) }])
            setCategory('')
            setAmount('')
        }
    }

    const totalBudget = expenses.reduce((acc, expense) => acc + expense.amount, 0)
    const categories = [...new Set(expenses.map(e => e.category))]

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Budget Tracker</h1>
            <div className="mb-6">
                <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 mr-2"
                    placeholder="Category"
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 mr-2"
                    placeholder="Amount"
                />
                <button onClick={addExpense} className="bg-teal-500 text-white px-4 py-2 rounded-md">Add Expense</button>
            </div>
            <h3 className="text-xl mb-4">Total Budget: ${totalBudget.toFixed(2)}</h3>

            <div className="flex flex-wrap space-x-6">
                {categories.map((categoryName) => {
                    const categoryTotal = expenses
                        .filter(e => e.category === categoryName)
                        .reduce((acc, expense) => acc + expense.amount, 0);
                    return (
                        <div key={categoryName} className="w-1/2 sm:w-1/4 p-4 text-center bg-white rounded-lg shadow-md">
                            <h4 className="text-lg font-semibold">{categoryName}</h4>
                            <p className="text-teal-500">${categoryTotal.toFixed(2)}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Budget