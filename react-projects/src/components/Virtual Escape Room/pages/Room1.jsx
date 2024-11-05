import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from '../components/Timer'
import Puzzle from '../components/Puzzle'

const Room1 = () => {
    const navigate = useNavigate()

    const [puzzleSolved, setPuzzleSolved] = useState(false)
    const [escaped, setEscaped] = useState(false)
    const [hintVisible, setHintVisible] = useState(false)

    const handlePuzzleSolved = () => setPuzzleSolved(true)
    const handleTimeUp = () => alert('Time is up! You lost.')
    const handleEscape = () => {
        setEscaped(true)
        navigate('/room2')
    }
    const toggleHint = () => setHintVisible(!hintVisible)

    return (
        <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/assets/images/room1-bg.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Room 1: Haunted Mansion</h1>
                <Timer onTimeUp={handleTimeUp} />

                {!escaped ? (
                    <div className="mt-8">
                        {!puzzleSolved ? (
                            <Puzzle answer="42" onPuzzleSolved={handlePuzzleSolved} />
                        ) : (
                            <div>
                                <p className="text-2xl">You've solved the puzzle! Now you can escape.</p>
                                <button onClick={handleEscape} className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-green-600">
                                    Escape
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-2xl font-bold text-green-500 mt-8">You escaped!</div>
                )}

                {/* Hint Section */}
                <button onClick={toggleHint} className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg transition duration-300 hover:bg-yellow-600">
                    {hintVisible ? 'Hide Hint' : 'Show Hint'}
                </button>

                {hintVisible && (
                    <div className="mt-4 text-lg text-white bg-gray-800 p-4 rounded-lg shadow-md">
                        <p>Hint: Think about famous numbers in science.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Room1