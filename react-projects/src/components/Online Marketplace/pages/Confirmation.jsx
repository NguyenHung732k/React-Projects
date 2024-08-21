import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Thank You for Your Purchase!</h2>
            <p className="text-lg mb-4">Your payment was successful. We appreciate your business!</p>
            <p className="text-gray-600 mb-6">You will receive an email confirmation shortly.</p>
            <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Return to Home
            </Link>
        </div>
    )
}

export default Confirmation