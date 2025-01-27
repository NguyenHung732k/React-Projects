import React, { useState } from 'react'

const RecordingPage = () => {
    const [isRecording, setIsRecording] = useState(false)
    const [audioUrl, setAudioUrl] = useState(null)

    const startRecording = () => {
        // Start recording logic here (using MediaRecorder API)
        setIsRecording(true)
    }

    const stopRecording = () => {
        setIsRecording(false)
        const audioBlob = new Blob()
        setAudioUrl(URL.createObjectURL(audioBlob))
    }

    return (
        <div className="flex flex-col items-center space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-white">Tell Your Story</h2>

            <button
                className={`bg-${isRecording ? 'red-600' : 'green-600'} p-6 rounded-full text-white text-4xl animate-pulse hover:bg-${isRecording ? 'red-500' : 'green-500'}`}
                onClick={isRecording ? stopRecording : startRecording}
            >
                <i className="fas fa-microphone-alt"></i>
            </button>

            {audioUrl && (
                <div className="w-full mt-6">
                    <audio controls src={audioUrl} />
                </div>
            )}

            <div className="flex space-x-4 mt-6">
                <button className="bg-gray-600 px-6 py-2 rounded-lg text-white hover:bg-gray-500">Preview</button>
                <button className="bg-yellow-600 px-6 py-2 rounded-lg text-white hover:bg-yellow-500">Save</button>
            </div>
        </div>
    )
}

export default RecordingPage