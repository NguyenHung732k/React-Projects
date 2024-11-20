import React, { useState, useEffect } from 'react'
import PollList from './PollList'
import CreatePoll from './CreatePoll'
import { Route, Routes, useParams, BrowserRouter as Router } from 'react-router-dom'

const PollingApp = () => {
    const [polls, setPolls] = useState([])
    const { id: pollIdFromUrl } = useParams()
    const [selectedPoll, setSelectedPoll] = useState(null)

    useEffect(() => {
        const savedPolls = JSON.parse(localStorage.getItem('polls')) || []
        setPolls(savedPolls)
    }, [])

    useEffect(() => {
        if (pollIdFromUrl) {
            const foundPoll = polls.find((poll) => poll.id === pollIdFromUrl)
            setSelectedPoll(foundPoll || null)
        }
    }, [polls, pollIdFromUrl])

    useEffect(() => {
        localStorage.setItem('polls', JSON.stringify(polls))
    }, [polls])

    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-6">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Live Polling App</h1>

                    <Routes>
                        <Route path="/create" element={<CreatePoll setPolls={setPolls} />} />
                        <Route path="/poll/:id" element={<PollList poll={selectedPoll} setPolls={setPolls} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default PollingApp