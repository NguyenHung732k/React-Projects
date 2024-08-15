import React from 'react'

const CustomerList = ({ customers, onEdit, onDelete }) => {
    return (
        <div className="max-w-8xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Customer List</h2>
            <div className="w-full flex justify-center items-center flex-wrap gap-8">
                {customers.map((customer) => (
                    <div key={customer.id} className="w-96 h-80 bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-semibold">{customer.name}</h3>
                            <p className="mt-2 text-gray-700">Email: {customer.email}</p>
                            <p className="mt-2 text-gray-700">Phone: {customer.phone}</p>
                            <p className="mt-2 text-gray-700">Address: {customer.address}</p>
                        </div>
                        <div className="flex justify-between bg-gray-100 p-4">
                            <button
                                onClick={() => onEdit(customer)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(customer.id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerList