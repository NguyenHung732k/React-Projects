import React, { useState } from 'react'

const AddItemModal = ({ isOpen, onClose, addItem }) => {
    const [newItem, setNewItem] = useState({ name: '', type: '', progress: 0 })

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newItem.name && newItem.type && newItem.progress >= 0 && newItem.progress <= 100) {
            addItem(newItem)
            onClose()
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewItem({ ...newItem, [name]: value })
    }

    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Item</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="name">Item Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={newItem.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter item name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="type">Item Type</label>
                            <input
                                id="type"
                                name="type"
                                type="text"
                                value={newItem.type}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter item type"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="progress">Progress</label>
                            <input
                                id="progress"
                                name="progress"
                                type="number"
                                min="0"
                                max="100"
                                value={newItem.progress}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder="Enter progress percentage"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                            >
                                Add Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}

export default AddItemModal