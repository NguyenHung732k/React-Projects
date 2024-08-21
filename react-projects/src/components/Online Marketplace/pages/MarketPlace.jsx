import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ProductProvider } from '../context/ProductContext'
import HomePage from './HomePage'
import ProductDetail from './ProductDetail'
import Checkout from './Checkout'




const MarketPlace = () => {
    return (
        <ProductProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </ProductProvider>
    )
}

export default MarketPlace