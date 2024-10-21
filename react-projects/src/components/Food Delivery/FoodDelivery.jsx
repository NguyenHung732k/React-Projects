import React, { useState } from 'react'
import NavBar from './components/NavBar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import StoreContextProvider from './context/StoreContext'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'

const FoodDelivery = () => {

    const [showLogin, setShowLogin] = useState(false)

    return (
        <StoreContextProvider>
            {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
            <div className="w-4/5 m-auto">
                <BrowserRouter>
                    <NavBar setShowLogin={setShowLogin} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/order" element={<PlaceOrder />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </StoreContextProvider>
    )
}

export default FoodDelivery