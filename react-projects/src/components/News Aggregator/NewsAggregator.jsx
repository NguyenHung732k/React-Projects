import React, { useState, useEffect } from 'react'
import Preferences from './Preferences'
import NewsFeed from './NewsFeed'

const NewsAggregator = () => {
    const [preferences, setPreferences] = useState('technology')
    const [savedArticles, setSavedArticles] = useState(() => {
        return JSON.parse(localStorage.getItem('savedArticles')) || []
    })
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        localStorage.setItem('savedArticles', JSON.stringify(savedArticles))
    }, [savedArticles])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} min-h-screen`}>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">Personalized News Aggregator</h1>
                <div className="flex justify-between items-center mb-4">
                    <Preferences preferences={preferences} setPreferences={setPreferences} />
                    <button
                        onClick={toggleDarkMode}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
                <NewsFeed preferences={preferences} savedArticles={savedArticles} setSavedArticles={setSavedArticles} />
            </div>
        </div>
    )
}

export default NewsAggregator