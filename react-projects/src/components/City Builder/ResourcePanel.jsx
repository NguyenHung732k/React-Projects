import React from 'react'

const ResourcePanel = ({ budget, energy, population }) => {
    return (
        <div className="w-full bg-blue-100 p-6 shadow-xl rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">City Resources</h2>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span>Budget:</span>
                    <span className="font-bold">${budget}</span>
                </div>
                <div className="flex justify-between">
                    <span>Energy:</span>
                    <span className="font-bold">{energy} kWh</span>
                </div>
                <div className="flex justify-between">
                    <span>Population:</span>
                    <span className="font-bold">{population}</span>
                </div>
            </div>
        </div>
    )
}

export default ResourcePanel