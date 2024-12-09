import React from 'react'

const Confirmation = () => {
    return (
        <div className="p-8 bg-green-100 text-center rounded-lg shadow-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Booking Confirmed!</h2>
            <p className="text-lg text-gray-700 mb-4">Thank you for booking your tickets. A confirmation email has been sent to you.</p>
            <div className="bg-white p-4 rounded-md shadow-md">
                <p className="font-semibold">Order Summary</p>
                <ul>
                    <li>Movie: Movie Title</li>
                    <li>Seats: A1, A2, B1</li>
                    <li>Total: $30</li>
                </ul>
            </div>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                View Your Booking
            </button>
        </div>
    )
}

export default Confirmation