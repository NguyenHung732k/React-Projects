import React, { useState } from 'react'
import Product from './Product'



const ProductList = ({ products, onEdit, onDelete }) => {

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product List</h2>
            <ul className="space-y-4">
                {products.length > 0 ? (
                    products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            onEdit={() => onEdit(product)}
                            onDelete={() => onDelete(product.id)}
                        />
                    ))
                ) : (
                    <li className="text-gray-500">No products available</li>
                )}
            </ul>
        </div>
    )
}

export default ProductList