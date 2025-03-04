import React, { useState } from 'react'
import { translateToEmojis } from './emojiDict'

const EmojiTranslator = () => {
    const [inputText, setInputText] = useState('')
    const [translatedText, setTranslatedText] = useState('')

    const handleInputChange = (event) => {
        setInputText(event.target.value)
    }

    const handleTranslateClick = () => {
        const translation = translateToEmojis(inputText)
        setTranslatedText(translation)
    }

    const handleClearClick = () => {
        setInputText('')
        setTranslatedText('')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="w-full max-w-2xl p-8 bg-white rounded-3xl shadow-xl">
                <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">Emoji Translator</h1>

                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter a sentence to translate into emojis..."
                    className="w-full h-32 p-4 border-2 border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4 transition-all"
                />

                <div className="flex justify-between gap-4">
                    <button
                        onClick={handleTranslateClick}
                        className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none transition duration-200 transform hover:scale-105"
                    >
                        Translate
                    </button>

                    <button
                        onClick={handleClearClick}
                        className="w-full py-3 bg-gray-300 text-gray-800 rounded-xl hover:bg-gray-400 focus:outline-none transition duration-200 transform hover:scale-105"
                    >
                        Clear
                    </button>
                </div>

                {translatedText && (
                    <div className="mt-6 text-center text-2xl text-gray-700 animate-fade-in">
                        <p>{translatedText}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmojiTranslator