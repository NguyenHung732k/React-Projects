import React, { useState } from 'react'
import CommissionRequestForm from './CommissionRequestForm'

const Dashboard = ({ artist }) => {
    const [requests, setRequests] = useState([])
    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleRequestSubmit = (details) => {
        setRequests([...requests, { id: requests.length + 1, ...details }])
        setIsFormVisible(false)
    }

    return (
        <div className="h-screen container mx-auto p-4">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="mt-4">
                <button
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    className="bg-blue-500 text-white rounded px-4 py-2 mb-4"
                >
                    {isFormVisible ? 'Hide Form' : 'Add Commission Request'}
                </button>
                {isFormVisible && <CommissionRequestForm onSubmit={handleRequestSubmit} />}
            </div>
            <h2 className="text-xl font-semibold mt-4">Commission Requests</h2>
            <div className="space-y-4">
                {requests.length === 0 ? (
                    <p>No requests yet.</p>
                ) : (
                    requests.map(request => (
                        <div key={request.id} className="border rounded-lg p-4 shadow-md">
                            <h3 className="font-bold">{request.title}</h3>
                            <p>{request.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Dashboard