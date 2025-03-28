import React, { useState, useEffect } from 'react'
import './AngryPrinter.css'
import Confetti from 'react-confetti'

const AngryPrinter = () => {
    const [usageCount, setUsageCount] = useState(0)
    const [angryLevel, setAngryLevel] = useState(0)
    const [isExploding, setIsExploding] = useState(false)

    const sarcasticComments = [
        "I'm busy doing absolutely nothing.",
        "Another page? Really?",
        "Oh, you want me to print *again*?",
        "You just printed, and now you're back? Disgraceful.",
        "I swear, if I could walk away, I would."
    ]

    const handlePrint = () => {
        setUsageCount(usageCount + 1)
        setAngryLevel(angryLevel + 1)
    }

    useEffect(() => {
        if (angryLevel >= 5) {
            setIsExploding(true)
        }
    }, [angryLevel])

    const getComment = () => {
        return sarcasticComments[usageCount % sarcasticComments.length]
    }

    return (
        <div className="h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 flex flex-col justify-center items-center text-white px-4">
            {isExploding && <Confetti />}
            <div className={`printer-box ${angryLevel >= 5 ? 'shake' : ''} sm:w-96 md:w-[350px] lg:w-[400px]`}>
                <div className="printer">
                    <div className="printer-header">Angry Office Printer</div>
                    <div className="printer-display">{getComment()}</div>
                    {angryLevel >= 3 && <div className="paper-spit">📝</div>}
                    {angryLevel >= 4 && <div className="scream">AHHHH!!!</div>}
                    {isExploding && <div className="explosion">💥 Confetti Explosion! 💥</div>}
                </div>
            </div>
            <button
                onClick={handlePrint}
                className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl shadow-xl text-lg transition-transform transform hover:scale-110 focus:outline-none"
            >
                Print
            </button>
        </div>
    )
}

export default AngryPrinter