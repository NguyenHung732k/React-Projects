import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

const explodeTypes = ['confetti', 'balloons', 'fireworks', 'dance', 'wave', 'sparkles']

const getRandomExplosion = () => {
    const randomIndex = Math.floor(Math.random() * explodeTypes.length)
    return explodeTypes[randomIndex]
}

const getRandomPosition = () => {
    return {
        x: Math.random() * 400 + 400,
        y: Math.random() * 200 + 200,
    }
}

const ExplodingMessage = () => {
    const [message, setMessage] = useState('')
    const [words, setWords] = useState([])

    // Handle message sending
    const handleSendMessage = () => {
        const newWords = message.split(' ').map((word) => ({
            word,
            explosion: getRandomExplosion(),
            position: getRandomPosition(),
        }))
        setWords(newWords)
        setMessage('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSendMessage()
        }
      }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
            <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 text-center">
                <h1 className="text-3xl font-bold text-purple-900 mb-6">Exploding Text Messages 💥</h1>

                <input
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
                />
                <button
                    onClick={handleSendMessage}
                    className="mt-4 bg-purple-600 text-white py-2 px-6 rounded-lg text-xl transition-transform duration-300 hover:scale-105 focus:ring-2 focus:ring-purple-600"
                >
                    Send Message
                </button>
            </div>

            <div className="relative w-full h-96 mt-8 overflow-hidden rounded-lg bg-gray-900 bg-opacity-50 border-4 border-white">
                {words.map((wordData, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            x: wordData.position.x,
                            y: wordData.position.y,
                            scale: 2,
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeOut',
                        }}
                        className={`absolute text-3xl font-semibold text-white ${wordData.explosion === 'confetti' ? 'text-green-300' : ''}`}
                    >
                        {wordData.word}
                        {wordData.explosion === 'balloons' && <span>🎈</span>}
                        {wordData.explosion === 'fireworks' && <span>🎆</span>}
                        {wordData.explosion === 'dance' && <span>💃🕺</span>}
                        {wordData.explosion === 'wave' && <span>👋</span>}
                        {wordData.explosion === 'sparkles' && <span>✨</span>}
                    </motion.span>
                ))}
            </div>

            {words.length > 0 && <Confetti />}
        </div>
    )
}

export default ExplodingMessage