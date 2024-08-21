import React, { useState } from 'react'
import OrderSummary from '../components/OrderSummary'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {

    const [order, setOrder] = useState({});
    const [paymentDetails, setPaymentDetails] = useState({});
    const navigate = useNavigate();

    const handlePayment = (event) => {
        event.preventDefault()
        navigate('/confirmation')
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
                <OrderSummary order={order} />
            </div>
            <form onSubmit={handlePayment} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Credit Card Number</label>
                    <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 border rounded-md"
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Pay Now
                </button>
            </form>
        </div>
    )
}

export default Checkout