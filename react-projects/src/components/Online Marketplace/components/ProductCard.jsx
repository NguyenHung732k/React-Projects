import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
    return (
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">View Details</Link>
            </div>
        </div>
    )
}

export default ProductCard