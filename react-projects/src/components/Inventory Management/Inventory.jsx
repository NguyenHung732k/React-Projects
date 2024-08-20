import React, { useState } from 'react'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'
import StockReport from './StockReport'

const Inventory = () => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        setProducts([...products, { id: Date.now(), ...product }])
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const editProduct = (editedProduct) => {
        setProducts(products.map(product =>
            product.id === editedProduct.id ? editedProduct : product
        ))
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Inventory Management System</h1>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
                        <AddProductForm onAdd={addProduct} />
                        <div className="flex-1">
                            <ProductList
                                products={products}
                                onEdit={(product) => {
                                    const newStock = prompt("Enter new stock level:", product.stock);
                                    if (newStock !== null) {
                                        editProduct({ ...product, stock: parseInt(newStock, 10) });
                                    }
                                }}
                                onDelete={deleteProduct}
                            />
                        </div>
                    </div>
                    <StockReport products={products} />
                </div>
            </div>
        </div>
    )
}

export default Inventory