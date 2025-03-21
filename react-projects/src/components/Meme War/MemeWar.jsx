import { useState } from 'react'
import Confetti from 'react-confetti'
import MemeCharacter from './MemeCharacter'
import './MemeWar.css'

const MemeWar = () => {
    const memes = [
        {
            name: 'Grumpy Cat',
            image: 'https://i.pinimg.com/originals/98/9c/93/989c93c653f6975b8c69db1ba3501790.gif',
            attack: 'Grumpy Cat Attack',
        },
        {
            name: 'Distracted Boyfriend',
            image: 'https://media.giphy.com/media/l0Ex1cz0d0Y06nB6Q/giphy.gif',
            attack: 'Distracted Boyfriend Attack',
        },
    ]

    const [selectedMeme, setSelectedMeme] = useState(null)
    const [attackingMeme, setAttackingMeme] = useState(null)
    const [score, setScore] = useState({ grumpyCat: 0, distractedBoyfriend: 0 })
    const [showConfetti, setShowConfetti] = useState(false)

    const handleMemeAttack = (meme) => {
        setAttackingMeme(meme.name)
        setSelectedMeme(meme)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)

        if (meme.name === 'Grumpy Cat') {
            setScore({ ...score, grumpyCat: score.grumpyCat + 1 })
        } else {
            setScore({ ...score, distractedBoyfriend: score.distractedBoyfriend + 1 })
        }

        setTimeout(() => setAttackingMeme(null), 1000)
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            <div className="flex justify-center items-center mb-10">
                <h1 className="text-white text-4xl font-bold">Meme War</h1>
            </div>

            <div className="flex justify-center space-x-8 mb-12">
                {memes.map((meme) => (
                    <MemeCharacter
                        key={meme.name}
                        meme={meme}
                        onAttack={() => handleMemeAttack(meme)}
                        isAttacking={attackingMeme === meme.name}
                    />
                ))}
            </div>

            <div className="text-center text-white">
                <h2 className="text-2xl font-semibold">Current Battle Score:</h2>
                <div className="mt-4 text-xl font-bold">
                    <p>Grumpy Cat: {score.grumpyCat}</p>
                    <p>Distracted Boyfriend: {score.distractedBoyfriend}</p>
                </div>
            </div>

            <div className="mt-8 text-center text-white">
                <p className="text-xl font-semibold">Click on a meme to attack! 🎉</p>
                <p className="mt-4 text-lg">Each meme has a unique attack move! Who will win the Meme War?</p>
            </div>
        </div>
    )
}

export default MemeWar