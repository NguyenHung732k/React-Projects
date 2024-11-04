import React, { useState } from 'react'
import TranslationInput from './TranslationInput'
import TranslationOutput from './TranslationOutput'

const Translator = () => {
    const [inputText, setInputText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLanguage, setSourceLanguage] = useState('en')
    const [targetLanguage, setTargetLanguage] = useState('es')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const translateText = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: "",
                    source: "auto",
                    target: "sq",
                    format: "text",
                    alternatives: 3,
                    api_key: ""
                }),
                headers: { "Content-Type": "application/json" }
            })
            const translated = await response.json()
            setTranslatedText(translated)
        } catch (error) {
            console.log(error)
            setError('Error translating text. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-200 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Language Translator</h1>
            {loading && <p className="mt-2 text-blue-500">Translating...</p>}
            {error && <p className="mt-2 text-red-500">{error}</p>}
            <div className="w-full flex items-start justify-center gap-4">
                <TranslationInput
                    inputText={inputText}
                    setInputText={setInputText}
                    translateText={translateText}
                    sourceLanguage={sourceLanguage}
                    setSourceLanguage={setSourceLanguage}
                    targetLanguage={targetLanguage}
                    setTargetLanguage={setTargetLanguage}
                />
                <TranslationOutput translatedText={translatedText} />
            </div>
        </div>
    )
}

export default Translator