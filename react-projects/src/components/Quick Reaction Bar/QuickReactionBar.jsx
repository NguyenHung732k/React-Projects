import { useState } from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import './QuickReactionBar.css'

const QuickReactionBar = () => {
    const [reaction, setReaction] = useState(null)
    const [counts, setCounts] = useState({ up: 123, down: 45 })
    const [animate, setAnimate] = useState({ up: false, down: false })

    const handleClick = (type) => {
        const newCounts = { ...counts }

        if (reaction === type) {
            newCounts[type] -= 1
            setReaction(null)
        } else {
            if (reaction) newCounts[reaction] -= 1
            newCounts[type] += 1
            setReaction(type)
        }

        setCounts(newCounts)

        setAnimate({ up: false, down: false })
        setTimeout(() => setAnimate({ [type]: true }), 0)
    }

    const buttonStyle = (type) =>
        `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 transform
        ${reaction === type
            ? 'bg-blue-600 text-white shadow-md scale-105'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
        }`

    const iconStyle = (type) => `text-lg transition-transform duration-150 ${animate[type] ? 'ping-once' : ''}`

    return (
        <div className="w-screen h-screen flex justify-center items-center gap-4 p-2">
            <button
                onClick={() => handleClick('up')}
                className={buttonStyle('up')}
                aria-label="Thumbs up"
            >
                <FaThumbsUp className={iconStyle('up')} />
                <span className="fade-in">{counts.up}</span>
            </button>

            <button
                onClick={() => handleClick('down')}
                className={buttonStyle('down')}
                aria-label="Thumbs down"
            >
                <FaThumbsDown className={iconStyle('down')} />
                <span className="fade-in">{counts.down}</span>
            </button>
        </div>
    );
}

export default QuickReactionBar