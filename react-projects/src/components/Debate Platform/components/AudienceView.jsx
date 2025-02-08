import React from 'react'
import { useNavigate } from 'react-router-dom'

const AudienceView = () => {
    const navigate = useNavigate()

    const handleVote = (side) => {
        // Emit vote through WebSocket or Firebase (example with socket.emit)
        console.log(`${side} vote received`)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-xl max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Vote Now</h2>
                <div className="mt-6 flex justify-center gap-6">
                    <button onClick={() => handleVote('pro')} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition w-24">
                        Yes
                    </button>
                    <button onClick={() => handleVote('con')} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition w-24">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AudienceView