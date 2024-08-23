import React, { useState } from 'react'
import AddressItem from './AddressItem'

const AddressList = ({ addresses, onEdit, onDelete }) => {

    return (
        <div className="w-full space-y-4">
            {addresses.map((address, index) => (
                <AddressItem
                    key={index}
                    address={address}
                    onEdit={onEdit}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </div>
    )
}

export default AddressList