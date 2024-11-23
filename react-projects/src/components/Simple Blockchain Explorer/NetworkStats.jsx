import React from "react"

const NetworkStats = ({ data, loading }) => {
    if (loading) return <div className="text-center text-gray-400">Loading Network Stats...</div>

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">Network Stats</h2>
            <p><strong>Total Supply:</strong> {parseInt(data.ethSupply, 16)} ETH</p>
        </div>
    )
}

export default NetworkStats