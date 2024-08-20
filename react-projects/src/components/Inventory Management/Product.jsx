import React from 'react'

const Product = ({ product, onEdit, onDelete }) => {
    return (
        <li className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
            <div>
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
            <div className="space-x-2">
                <button onClick={onEdit} className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition">Edit</button>
                <button onClick={onDelete} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">Delete</button>
            </div>
        </li>
    )
}

export default Product