import React, { useState } from 'react'

const AddItemForm = ({ onAddItem }) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [condition, setCondition] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onAddItem({ name, category, expirationDate, condition })
        setName('')
        setCategory('')
        setExpirationDate('')
        setCondition('')
    }

    return (
        <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-8">Add New Item</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    placeholder="Item Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <div className="flex space-x-4">
                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                    <select
                        value={condition}
                        onChange={(event) => setCondition(event.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>
                <input
                    type="date"
                    value={expirationDate}
                    onChange={(event) => setExpirationDate(event.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Add Item
                </button>
            </form>
        </div>
    )
}

export default AddItemForm