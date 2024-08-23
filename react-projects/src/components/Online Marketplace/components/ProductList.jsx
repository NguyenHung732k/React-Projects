import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList