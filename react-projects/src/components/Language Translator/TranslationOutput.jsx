import React from 'react'

const TranslationOutput = ({ translatedText }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-full max-w-md">
            <h2 className="font-semibold text-lg">Translated Text:</h2>
            <p className="border border-gray-300 p-3 rounded-lg">{translatedText || 'Translation will appear here.'}</p>
        </div>
    )
}

export default TranslationOutput