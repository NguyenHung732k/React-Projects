import React, { useState } from 'react'

import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'



const CRM = () => {

    const [customers, setCustomers] = useState([])
    const [currentCustomer, setCurrentCustomer] = useState(null)
    const [isEditing, setIsEditing] = useState(false)


    const handleSave = (customers) => {
        if (isEditing) {
            setCustomers((prevCustomers) =>
                prevCustomers.map((customer) => customer.id === currentCustomer.id ? { ...customer, ...customers } : customer
                )
            )
            setIsEditing(false)
        } else {
            setCustomers((prevCustomers) => [
                ...prevCustomers,
                { id: Date.now(), ...customers }
            ])
        }
        setCurrentCustomer(null)
    }

    const handleEdit = (customer) => {
        setCurrentCustomer(customer)
        setIsEditing(true)
    }

    const handleDelete = (id) => {
        setCustomers((prevCustomers) =>
            prevCustomers.filter((customer) => customer.id !== id))
    }

    const handleCancel = () => {
        setCurrentCustomer(null)
        setIsEditing(false)
    }



    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {currentCustomer ? (
                <CustomerForm
                    currentCustomer={currentCustomer}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <CustomerList
                    customers={customers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}
            {!currentCustomer && !isEditing && (
                <button
                    onClick={() => setCurrentCustomer({})}
                    className="fixed bottom-4 right-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300"
                >
                    Add Customer
                </button>
            )}
        </div>
    )
}

export default CRM