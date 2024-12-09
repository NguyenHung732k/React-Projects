import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('public-key-here')

const Payment = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handlePayment = async () => {
        setLoading(true)
        const { error } = await stripe.confirmCardPayment('client-secret-here', {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })

        if (error) {
            console.log(error)
        } else {
            navigate('/confirmation')
        }
    }

    return (
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Complete Your Payment</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Details</label>
                <CardElement className="border-2 border-gray-300 p-3 rounded-md" />
            </div>
            <div className="mt-4">
                <button
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </div>
        </div>
    )
}

export default Payment