import { useState } from 'react'

const CommissionRequestForm = ({ onSubmit }) => {
    const [requestDetails, setRequestDetails] = useState({ title: '', description: '' })

    const handleChange = (event) => {
        setRequestDetails({ ...requestDetails, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(requestDetails)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Request a Commission</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    type="text"
                    placeholder="Artwork Title"
                    className="border rounded p-2 w-full"
                    required
                    value={requestDetails.title}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Describe your request"
                    className="border rounded p-2 w-full h-32"
                    required
                    value={requestDetails.description}
                    onChange={handleChange}
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">Submit Request</button>
            </form>
        </div>
    )
}

export default CommissionRequestForm