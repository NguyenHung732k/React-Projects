import React from "react"

const TransactionInfo = ({ data }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">Transaction Details</h2>
            <p><strong>Transaction Hash:</strong> {data.hash}</p>
            <p><strong>Block Number:</strong> {parseInt(data.blockNumber, 16)}</p>
            <p><strong>From:</strong> {data.from}</p>
            <p><strong>To:</strong> {data.to}</p>
            <p><strong>Value:</strong> {parseInt(data.value, 16) / 1e18} ETH</p>
            <p><strong>Gas Used:</strong> {parseInt(data.gasUsed, 16)}</p>
        </div>
    )
}

export default TransactionInfo