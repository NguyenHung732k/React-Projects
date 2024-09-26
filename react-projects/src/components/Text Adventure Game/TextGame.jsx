import React, { useState } from 'react'

const story = [
    {
        id: 1,
        text: "You wake up in a dark forest. Do you want to go left towards the river or right towards the mountain?",
        choices: [
            { text: 'Go left', nextId: 2 },
            { text: 'Go right', nextId: 3 },
        ],
    },
    {
        id: 2,
        text: "You arrive at the river. It's peaceful here. Do you want to rest or continue exploring?",
        choices: [
            { text: 'Rest', nextId: 4 },
            { text: 'Explore', nextId: 5 },
        ],
    },
    {
        id: 3,
        text: "You climb the mountain and find a cave. Do you want to enter the cave or head back?",
        choices: [
            { text: 'Enter the cave', nextId: 6 },
            { text: 'Head back', nextId: 1 },
        ],
    },
    {
        id: 4,
        text: "You feel refreshed but hear strange noises nearby. Do you want to investigate or stay put?",
        choices: [
            { text: 'Investigate', nextId: 7 },
            { text: 'Stay put', nextId: 8 },
        ],
    },
    {
        id: 5,
        text: "You find a hidden treasure! Congratulations! Do you want to take it or leave it?",
        choices: [
            { text: 'Take it', nextId: 9 },
            { text: 'Leave it', nextId: 10 },
        ],
    },
    {
        id: 6,
        text: "Inside the cave, you discover a sleeping dragon! Do you want to sneak away or try to wake it?",
        choices: [
            { text: 'Sneak away', nextId: 11 },
            { text: 'Wake it', nextId: 12 },
        ],
    },
]

const TextGame = () => {
    const [currentStoryId, setCurrentStoryId] = useState(1)
    const currentStory = story.find(story => story.id === currentStoryId)

    const restartGame = () => {
        setCurrentStoryId(1)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Text Adventure Game</h1>
                <>
                    {currentStory ?
                        <>
                            <p className="mb-4 text-gray-700">{currentStory.text}</p>
                            <div className="space-y-2">
                                {currentStory.choices.map(choice => (
                                    <button
                                        key={choice.nextId}
                                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                                        onClick={() => setCurrentStoryId(choice.nextId)}
                                    >
                                        {choice.text}
                                    </button>
                                ))}
                            </div>
                        </>
                        : <div>End Game</div>
                    }
                </>
                <button
                    className="mt-4 w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
                    onClick={restartGame}
                >
                    Restart Game
                </button>
            </div>
        </div>
    )
}

export default TextGame