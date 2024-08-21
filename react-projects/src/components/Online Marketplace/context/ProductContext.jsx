import React, { createContext, useState } from 'react'


const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => setProducts([...products, product])
    const removeProduct = (productId) => setProducts(products.filter(p => p.id !== productId))

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext