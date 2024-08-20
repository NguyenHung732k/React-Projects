import React, { useState } from 'react'

const AddProductForm = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [stock, setStock] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name.trim() && !isNaN(stock) && stock >= 0) {
            onAdd({ name, stock: parseInt(stock, 10) })
            setName('')
            setStock('')
        } else {
            alert('Please enter valid product details')
        }
    }


    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Product</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Product Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Stock Level</label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add Product
            </button>
        </form>
    )
}

export default AddProductForm