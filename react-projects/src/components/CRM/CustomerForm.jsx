import React, { useEffect, useState } from 'react'

const CustomerForm = ({ currentCustomer, onSave, onCancel }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        if (currentCustomer) {
            setName(currentCustomer.name)
            setEmail(currentCustomer.email)
            setPhone(currentCustomer.phone)
            setAddress(currentCustomer.address)
        }
    }, [currentCustomer])


    const handleSubmit = (event) => {
        event.preventDefault()
        onSave({ name, email, phone, address })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6"
        >
            <h2 className="text-2xl font-semibold mb-4 text-center">{currentCustomer ? 'Edit Customer' : 'Add Customer'}</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default CustomerForm