import React from "react"

const BlockInfo = ({ data }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">Block Details</h2>
            <p><strong>Block Number:</strong> {parseInt(data.number, 16)}</p>
            <p><strong>Hash:</strong> {data.hash}</p>
            <p><strong>Miner:</strong> {data.miner}</p>
            <p>
                <strong>Timestamp:</strong>{" "}
                {new Date(parseInt(data.timestamp, 16) * 1000).toLocaleString()}
            </p>
            <p><strong>Transactions:</strong> {data.transactions.length}</p>
        </div>
    )
}

export default BlockInfo