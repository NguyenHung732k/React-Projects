import React from 'react'
import GratitudePrompt from './components/GratitudePrompt'
import InspirationalQuotes from './components/InspirationalQuotes'
import ShareGratitude from './components/ShareGratitude'

const GratitudeJournal = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-pink-100 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Daily Gratitude Journal</h1>

                <GratitudePrompt />
                <InspirationalQuotes />
                <ShareGratitude />
            </div>
        </div>
    )
}

export default GratitudeJournal