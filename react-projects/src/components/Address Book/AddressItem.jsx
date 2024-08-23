const AddressItem = ({ address, onEdit, onDelete }) => {
    return (
        <div className="p-4 border rounded shadow">
            <p><strong>Name:</strong> {address.name}</p>
            <p><strong>Street:</strong> {address.street}</p>
            <p><strong>City:</strong> {address.city}</p>
            <p><strong>State:</strong> {address.state}</p>
            <p><strong>ZIP Code:</strong> {address.zip}</p>
            <div className="mt-2 flex space-x-2">
                <button
                    onClick={() => onEdit(address)}
                    className="p-2 bg-yellow-500 text-white rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(address)}
                    className="p-2 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default AddressItem