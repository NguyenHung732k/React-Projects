import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Timer from './Timer'
import ParticipantList from './ParticipantList'
import VoteSummary from './VoteSummary'

const DebateDashboard = () => {
    const { topic } = useParams()
    const decodedTopic = decodeURIComponent(topic)

    // Sample participants
    const initialParticipants = [
        { name: 'John Doe', side: 'pro' },
        { name: 'Jane Smith', side: 'con' },
        { name: 'Samuel Lee', side: 'pro' },
        { name: 'Emily Davis', side: 'con' },
    ]

    const [participants, setParticipants] = useState(initialParticipants)
    const [votes, setVotes] = useState({ pro: 0, con: 0 })
    const [time, setTime] = useState(60)
    const [isActive, setIsActive] = useState(false)
    const [currentSpeaker, setCurrentSpeaker] = useState(0)

    const addParticipant = (name, side) => {
        setParticipants([...participants, { name, side }])
    }

    const startDebate = () => {
        setIsActive(true)
    }

    const endDebate = () => {
        setIsActive(false)
    }

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                setTime(prev => {
                    if (prev === 0) {
                        clearInterval(interval)
                        setCurrentSpeaker((prevSpeaker) => (prevSpeaker + 1) % participants.length)
                        setTime(60)
                        return 60
                    }
                    return prev - 1
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isActive, participants])

    const handleVote = (side) => {
        if (side === 'pro') setVotes((prevVotes) => ({ ...prevVotes, pro: prevVotes.pro + 1 }))
        if (side === 'con') setVotes((prevVotes) => ({ ...prevVotes, con: prevVotes.con + 1 }))
    }

    return (
        <div className="flex flex-col items-center bg-gray-50 h-screen py-10">
            <div className="w-full max-w-3xl bg-white p-5 rounded-lg shadow-md mb-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">Live Debate: {decodedTopic}</h1>
                <div className="flex justify-between mt-4">
                    <Timer time={time} isActive={isActive} />
                    <div className="flex gap-2">
                        <button onClick={startDebate} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                            Start Debate
                        </button>
                        <button onClick={endDebate} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                            End Debate
                        </button>
                    </div>
                </div>
            </div>

            <ParticipantList participants={participants} />
            <VoteSummary votes={votes} />
        </div>
    )
}

export default DebateDashboard