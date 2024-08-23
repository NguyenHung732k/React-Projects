import { useState, useEffect } from 'react'

const AddressForm = ({ onSave, address }) => {
    const [name, setName] = useState(address ? address.name : '')
    const [street, setStreet] = useState(address ? address.street : '')
    const [city, setCity] = useState(address ? address.city : '')
    const [state, setState] = useState(address ? address.state : '')
    const [zip, setZip] = useState(address ? address.zip : '')

    useEffect(() => {
        if (address) {
            setName(address.name)
            setStreet(address.street)
            setCity(address.city)
            setState(address.state)
            setZip(address.zip)
        }
    }, [address])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({ name, street, city, state, zip })
        setName('')
        setStreet('')
        setCity('')
        setState('')
        setZip('')
    }

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4 mb-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="ZIP Code"
                className="p-2 border rounded w-full"
                required
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                Save
            </button>
        </form>
    )
}

export default AddressForm