import React, { useState, useEffect } from "react"

const ReadtimeEstimator = () => {
    const [text, setText] = useState("")
    const [readingTime, setReadingTime] = useState(0)
    const [wpm, setWpm] = useState(200)
    const [speechActive, setSpeechActive] = useState(false)

    // Function to calculate reading time
    const calculateReadingTime = (text, wpm = 200) => {
        const wordCount = text.split(/\s+/).length
        const minutes = wordCount / wpm
        return Math.ceil(minutes)
    }

    const handleTextChange = (event) => {
        const value = event.target.value
        setText(value)
        setReadingTime(calculateReadingTime(value, wpm))
    }

    const handleWpmChange = (event) => {
        const newWpm = event.target.value
        setWpm(newWpm)
        setReadingTime(calculateReadingTime(text, newWpm))
    }

    // Function to handle speech playback
    const handleSpeechToText = () => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text)
            if (speechActive) {
                window.speechSynthesis.cancel()
            } else {
                window.speechSynthesis.speak(utterance)
            }
            setSpeechActive(!speechActive)
        } else {
            alert("Speech synthesis not supported in your browser.")
        }
    }

    useEffect(() => {
        setReadingTime(calculateReadingTime(text, wpm))
    }, [text, wpm])

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-6">
                <h1 className="text-3xl font-semibold text-center text-indigo-600">
                    ReadTime Estimator
                </h1>

                {/* Textarea for input */}
                <textarea
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    rows="8"
                    placeholder="Enter your text here..."
                    value={text}
                    onChange={handleTextChange}
                />

                {/* Reading Speed */}
                <div className="flex justify-between items-center">
                    <label className="text-lg text-gray-600">Reading Speed (WPM):</label>
                    <div className="flex items-center space-x-3">
                        <input
                            type="range"
                            min="100"
                            max="400"
                            value={wpm}
                            onChange={handleWpmChange}
                            className="w-2/3"
                        />
                        <span className="text-gray-600">{wpm} WPM</span>
                    </div>
                </div>

                {/* Display reading time */}
                <div className="text-center text-xl font-medium text-gray-700">
                    Estimated Reading Time:{" "}
                    <strong className="text-indigo-600">{readingTime} minute(s)</strong>
                </div>

                {/* Speech button */}
                <button
                    className={`w-full py-3 mt-4 rounded-lg text-white ${speechActive ? "bg-red-500" : "bg-indigo-600"
                        } hover:bg-indigo-700 transition duration-200 ease-in-out`}
                    onClick={handleSpeechToText}
                >
                    {speechActive ? "Stop Reading" : "Read Aloud"}
                </button>
            </div>
        </div>
    )
}

export default ReadtimeEstimator