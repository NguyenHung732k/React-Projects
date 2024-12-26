import React, { useState } from 'react'

function Vendors() {
    const [vendorName, setVendorName] = useState('')
    const [category, setCategory] = useState('')
    const [contact, setContact] = useState('')
    const [vendors, setVendors] = useState([])

    const addVendor = () => {
        if (vendorName && category && contact) {
            setVendors([...vendors, { id: Date.now(), vendorName, category, contact }])
            setVendorName('')
            setCategory('')
            setContact('')
        }
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Vendor Management</h1>
            <div className="mb-6">
                <input
                    type="text"
                    value={vendorName}
                    onChange={(event) => setVendorName(event.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 mr-2"
                    placeholder="Vendor Name"
                />
                <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 mr-2"
                    placeholder="Category"
                />
                <input
                    type="text"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    className="border-2 border-gray-300 rounded-md p-2 mr-2"
                    placeholder="Contact Info"
                />
                <button onClick={addVendor} className="bg-teal-500 text-white px-4 py-2 rounded-md">Add Vendor</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map(vendor => (
                    <div key={vendor.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                        <h3 className="font-semibold text-xl">{vendor.vendorName}</h3>
                        <p className="text-teal-500">{vendor.category}</p>
                        <p className="mt-2">{vendor.contact}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vendors