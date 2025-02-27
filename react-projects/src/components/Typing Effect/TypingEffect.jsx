import { useState, useEffect } from "react"
import "./TypingEffect.css"

const TypingEffect = ({
    sentences,
    speed = 100,
    delay = 1000,
    backspaceSpeed = 80,
    cursorStyle = "animate-blink",
}) => {
    const [text, setText] = useState("")
    const [currentSentence, setCurrentSentence] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        if (currentSentence < sentences.length) {
            const sentence = sentences[currentSentence]
            let i = 0
            let interval

            if (!isDeleting) {
                // Typing effect
                interval = setInterval(() => {
                    setText((prev) => prev + sentence[i])
                    i++
                    if (i === sentence.length - 1) {
                        clearInterval(interval)
                        setTimeout(() => {
                            setIsDeleting(true)
                        }, delay)
                    }
                }, speed)
            } else {
                // Backspacing effect
                interval = setInterval(() => {
                    setText((prev) => prev.slice(0, -1))
                    i--
                    if (i === 0) {
                        clearInterval(interval)
                        setTimeout(() => {
                            setIsDeleting(false)
                            setCurrentSentence((prev) => prev + 1)
                        }, delay)
                    }
                }, backspaceSpeed)
            }

            return () => clearInterval(interval)
        }
    }, [currentSentence, sentences, speed, delay, backspaceSpeed, isDeleting])

    return (
        <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white">
                <span className="border-b-4 border-indigo-500">{text}</span>
            </h1>
            <div className={`absolute bottom-0 left-0 ${cursorStyle}`}></div>
        </div>
    )
}

export default TypingEffect