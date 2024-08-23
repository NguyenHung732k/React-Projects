import React, { useState, useEffect } from 'react'
import AddressForm from './AddressForm'
import AddressList from './AddressList'

const AddressBook = () => {

    const [addresses, setAddresses] = useState([])
    const [editingAddress, setEditingAddress] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredAddresses, setFilteredAddresses] = useState([])

    useEffect(() => {
        // Load tasks from localStorage
        const savedAddresses = JSON.parse(localStorage.getItem('addresses')) || []
        if (savedAddresses) setAddresses(savedAddresses)
    }, [])

    useEffect(() => {
        // Save tasks to localStorage
        if (addresses?.length) {
            localStorage.setItem('addresses', JSON.stringify(addresses))
        }
    }, [addresses])


    const handleSave = (address) => {
        if (editingAddress) {
            const updatedAddresses = addresses.map((addr) =>
                addr === editingAddress ? address : addr
            )
            setAddresses(updatedAddresses)
            setEditingAddress(null)
        } else {
            setAddresses([...addresses, address])
        }
    }

    const handleEdit = (address) => {
        setEditingAddress(address)
    }

    const handleDelete = (id) => {
        const updatedAddresses = addresses.filter((address, index) => index !== id)
        setAddresses(updatedAddresses)
    }

    return (
        <div className="w-2/6 p-8 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Address Book</h1>
            <AddressForm onSave={handleSave} address={editingAddress} />
            <AddressList addresses={addresses} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    )
}

export default AddressBook