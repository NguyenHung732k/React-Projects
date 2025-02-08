import React from 'react'

const ParticipantList = ({ participants }) => {
    return (
        <div className="w-full max-w-3xl bg-white p-5 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Participants</h2>
            <ul className="mt-4 space-y-3">
                {participants.map((participant, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                        <span className="font-semibold">{participant.name}</span>
                        <span className={`text-sm font-medium ${participant.side === 'pro' ? 'text-blue-600' : 'text-red-600'}`}>
                            {participant.side === 'pro' ? 'Pro Side' : 'Con Side'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ParticipantList