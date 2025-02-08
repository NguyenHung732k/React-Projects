import React from 'react'

const VoteSummary = ({ votes }) => {
    return (
        <div className="w-full max-w-3xl bg-white p-5 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Live Votes</h2>
            <div className="mt-4 flex justify-between gap-4">
                <div className="w-1/2">
                    <div className="bg-blue-500 text-white py-3 rounded-lg text-center">Pro Votes: {votes.pro}</div>
                </div>
                <div className="w-1/2">
                    <div className="bg-red-500 text-white py-3 rounded-lg text-center">Con Votes: {votes.con}</div>
                </div>
            </div>
        </div>
    )
}

export default VoteSummary