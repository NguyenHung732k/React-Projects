import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TopicList = () => {
    const [topics, setTopics] = useState([
        'Global Warming: Is it real?',
        'Should Social Media be regulated?',
        'Is the death penalty effective?'
    ])

    const [newTopic, setNewTopic] = useState('')
    const navigate = useNavigate()

    const handleAddTopic = () => {
        if (newTopic.trim()) {
            setTopics([...topics, newTopic])
            setNewTopic('')
        }
    }

    const handleStartDebate = (topic) => {
        navigate(`/debate/${encodeURIComponent(topic)}`)
    }

    return (
        <div className="flex flex-col items-center bg-gray-50 py-10">
            <div className="w-full max-w-3xl bg-white p-5 rounded-lg shadow-md mb-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">Debate Topics</h1>
                <div className="mt-6 space-y-4">
                    <h2 className="text-lg font-semibold">Available Topics:</h2>
                    <ul className="space-y-3">
                        {topics.map((topic, index) => (
                            <li key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                                <span className="font-semibold">{topic}</span>
                                <button
                                    onClick={() => handleStartDebate(topic)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                                >
                                    Start Debate
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Add a New Topic:</h2>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            value={newTopic}
                            onChange={(event) => setNewTopic(event.target.value)}
                            className="border border-gray-300 p-2 rounded-lg w-full"
                            placeholder="Enter a new debate topic"
                        />
                        <button
                            onClick={handleAddTopic}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Add Topic
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicList