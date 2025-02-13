import React, { useState } from 'react'
import Web3 from 'web3'

const MetamaskLogin = ({ onLogin }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleConnect = async () => {
        setLoading(true)
        setError('')
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum)
            try {
                await window.ethereum.enable()
                const accounts = await web3.eth.getAccounts()
                onLogin(accounts[0])
            } catch (err) {
                setError('Failed to connect wallet')
            } finally {
                setLoading(false)
            }
        } else {
            setError('Please install Metamask')
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center space-y-4 p-8">
            <h2 className="text-2xl font-semibold">Welcome to the Blockchain Voting System</h2>
            <p className="text-gray-600">Connect your wallet to start voting</p>
            <button
                onClick={handleConnect}
                className="bg-blue-600 text-white p-4 rounded-lg w-full hover:bg-blue-700 transition"
            >
                Connect Metamask
            </button>
            {loading && <p className="text-blue-500 mt-2">Connecting...</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    )
}

export default MetamaskLogin