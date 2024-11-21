import React, { useState } from 'react'

const BillSplitter = () => {
    const [users, setUsers] = useState(['Alice', 'Bob'])
    const [expenses, setExpenses] = useState([])
    const [newExpense, setNewExpense] = useState({
        description: '',
        amount: '',
        payer: '',
        contributors: [],
    })

    const [debts, setDebts] = useState(() => {
        let totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0)
        let individualAmount = totalAmount / users.length

        let owes = users.reduce((acc, user) => {
            acc[user] = { owes: 0, paid: 0 }
            return acc
        }, {})

        expenses.forEach((expense) => {
            let individualShare = parseFloat(expense.amount) / expense.contributors.length
            owes[expense.payer].paid += parseFloat(expense.amount)

            expense.contributors.forEach((contributor) => {
                if (contributor !== expense.payer) {
                    owes[contributor].owes += individualShare
                }
            })
        })
        return owes
    })

    const addExpense = () => {
        if (newExpense.description && newExpense.amount && newExpense.payer) {
            setExpenses([...expenses, newExpense])
            setNewExpense({
                description: '',
                amount: '',
                payer: '',
                contributors: [],
            })
        }
    }


    const markPayment = (user, amount) => {
        const updatedDebts = { ...debts }
        updatedDebts[user].paid += amount
        setDebts(updatedDebts)
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-6">
            <h1 className="text-4xl font-semibold mb-6 text-center text-gray-700">Roommate Bill Splitter</h1>

            <div className="w-4/6 bg-white p-8 rounded-xl shadow-md mb-8 mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Add an Expense</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-600">Expense Description</label>
                        <input
                            type="text"
                            placeholder="E.g., Rent, Groceries, Utilities"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newExpense.description}
                            onChange={(event) => setNewExpense({ ...newExpense, description: event.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-600">Amount ($)</label>
                        <input
                            type="number"
                            placeholder="Enter the total amount"
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newExpense.amount}
                            onChange={(event) => setNewExpense({ ...newExpense, amount: event.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-600">Select Payer</label>
                        <select
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newExpense.payer}
                            onChange={(event) => setNewExpense({ ...newExpense, payer: event.target.value })}
                        >
                            <option value="">Select Payer</option>
                            {users.map((user, index) => (
                                <option key={index} value={user}>
                                    {user}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-600">Select Contributors</label>
                        <select
                            multiple
                            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newExpense.contributors}
                            onChange={(e) =>
                                setNewExpense({
                                    ...newExpense,
                                    contributors: Array.from(e.target.selectedOptions, (option) => option.value),
                                })
                            }
                        >
                            <option value="">Select Contributors</option>
                            {users.map((user, index) => (
                                <option key={index} value={user}>
                                    {user}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            onClick={addExpense}
                            className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add Expense
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-medium mb-6 text-center text-gray-700">Expenses</h2>
                <div className="space-y-4">
                    {expenses.length > 0 ? (
                        expenses.map((expense, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 border-l-4 border-blue-500 rounded-md shadow-sm"
                            >
                                <div>
                                    <h3 className="font-medium text-lg text-gray-800">{expense.description}</h3>
                                    <p className="text-sm text-gray-600">Amount: ${expense.amount}</p>
                                    <p className="text-sm text-gray-500">Payer: {expense.payer}</p>
                                    <p className="text-sm text-gray-500">Contributors: {expense.contributors.join(', ')}</p>
                                </div>
                                <span className="text-sm text-blue-600 font-medium">${expense.amount}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No expenses added yet.</p>
                    )}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-2xl font-medium text-center text-gray-700 mb-6">Amount Owed</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-medium text-lg text-blue-700">{user}</h3>
                                <p className="text-sm text-gray-600">Owes: ${debts[user]?.owes.toFixed(2)}</p>
                                <p className="text-sm text-gray-600">Paid: ${debts[user]?.paid.toFixed(2)}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => markPayment(user, 10)}
                                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                                >
                                    Mark Payment
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BillSplitter