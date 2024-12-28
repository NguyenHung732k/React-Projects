import React from 'react'

const AudioPlayer = ({ audioUrl }) => (
    <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
        <audio controls className="w-64">
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    </div>
)

export default AudioPlayer