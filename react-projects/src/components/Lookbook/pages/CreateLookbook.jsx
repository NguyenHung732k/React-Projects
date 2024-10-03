import React, { useState } from 'react'

const CreateLookbook = ({ setItems }) => {
    const [formData, setFormData] = useState({ name: '', description: '', image: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setItems((prev) => [...prev, formData])
        setFormData({ name: '', description: '', image: '' })
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 m-4">
            <h2 className="text-2xl font-bold mb-4">Add a New Look</h2>
            <input
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 p-2 mb-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button type="submit" className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-75">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                    <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                    Add Item
                </span>
            </button>

        </form>
    )
}

export default CreateLookbook