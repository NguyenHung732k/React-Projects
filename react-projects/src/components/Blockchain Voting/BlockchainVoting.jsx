import React, { useState } from 'react'
import MetamaskLogin from './MetamaskLogin'
import PollCreation from './PollCreation'
import VotingInterface from './VotingInterface'
import VoteResults from './VoteResults'

const BlockchainVoting = () => {
    const [userAddress, setUserAddress] = useState('')
    const [polls, setPolls] = useState([])
    const [currentPoll, setCurrentPoll] = useState(null)
    const [voted, setVoted] = useState(false)

    const handleLogin = (address) => {
        setUserAddress(address)
    }

    const handlePollCreated = (poll) => {
        setPolls([...polls, poll])
        setCurrentPoll(poll)
    }

    const handleVote = (candidateId) => {
        // Simulate vote logic here, updating the blockchain and poll state
        setVoted(true)
        // Update vote counts in the system (or blockchain)
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            {!userAddress ? (
                <MetamaskLogin onLogin={handleLogin} />
            ) : !currentPoll ? (
                <PollCreation onPollCreated={handlePollCreated} />
            ) : voted ? (
                <VoteResults pollResults={currentPoll.candidates} />
            ) : (
                <VotingInterface candidates={currentPoll.candidates} onVote={handleVote} />
            )}
        </div>
    )
}

export default BlockchainVoting