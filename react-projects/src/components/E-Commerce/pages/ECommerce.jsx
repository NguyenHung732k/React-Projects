import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Home from './Home'
import ProductPage from './ProductPage'
import CartPage from './CartPage'

const ECommerce = () => {
    return (
        <Router>
            <Header />
            <main className="min-h-screen container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default ECommerce