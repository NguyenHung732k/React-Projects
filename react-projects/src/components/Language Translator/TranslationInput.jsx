import React from 'react'

const TranslationInput = ({ inputText, setInputText, translateText, sourceLanguage, setSourceLanguage, targetLanguage, setTargetLanguage }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-md">
            <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                rows="4"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                placeholder="Enter text to translate"
            />
            <div className="flex justify-between space-x-2 mt-4">
                <select
                    value={sourceLanguage}
                    onChange={(event) => setSourceLanguage(event.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                </select>
                <select
                    value={targetLanguage}
                    onChange={(event) => setTargetLanguage(event.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
                >
                    <option value="es">Spanish</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                </select>
            </div>
            <button
                onClick={translateText}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition duration-200"
            >
                Translate
            </button>
        </div>
    )
}

export default TranslationInput