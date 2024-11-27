import React, { useState, useEffect } from "react"

const initialRooms = [
    { id: 1, name: "Living Room", items: [], bgColor: "#f3f4f6" },
    { id: 2, name: "Kitchen", items: [], bgColor: "#f3f4f6" },
    { id: 3, name: "Bedroom", items: [], bgColor: "#f3f4f6" },
    { id: 4, name: "Bathroom", items: [], bgColor: "#f3f4f6" },
    { id: 5, name: "Library", items: [], bgColor: "#f3f4f6" },
]

const MemoryPalaceGame = () => {
    const [rooms, setRooms] = useState(initialRooms)
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [item, setItem] = useState("")
    const [gameMode, setGameMode] = useState(null) // "sequence" or "location"
    const [gameStarted, setGameStarted] = useState(false)
    const [puzzleItems, setPuzzleItems] = useState([])
    const [timer, setTimer] = useState(0)
    const [feedback, setFeedback] = useState(null)
    const [currentItem, setCurrentItem] = useState(null) // Item to be guessed in sequence puzzle
    const [sequence, setSequence] = useState([]) // Sequence of items for Sequence Puzzle
    const [currentIndex, setCurrentIndex] = useState(0) // To track current item in sequence


    useEffect(() => {
        let interval
        if (gameStarted) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [gameStarted])

    // Add item to the selected room
    const addItemToRoom = () => {
        if (!selectedRoom || !item) return
        const updatedRooms = [...rooms]
        const roomIndex = updatedRooms.findIndex((r) => r.id === selectedRoom)
        updatedRooms[roomIndex].items.push(item)
        setRooms(updatedRooms)
        setPuzzleItems(updatedRooms.flatMap((r) => r.items)) // Update all puzzle items
        setItem("")
    }

    // Change the background color of a room
    const changeRoomBackground = (roomId, color) => {
        const updatedRooms = [...rooms]
        const roomIndex = updatedRooms.findIndex((r) => r.id === roomId)
        updatedRooms[roomIndex].bgColor = color
        setRooms(updatedRooms)
    }

    // Start the game (either sequence or location puzzle)
    const startGame = (mode) => {
        setGameStarted(true)
        setGameMode(mode)
        setTimer(0)
        setFeedback(null)
        setSequence([])
        setCurrentIndex(0)

        if (mode === "sequence") {
            // For sequence mode, shuffle items and prepare the sequence
            const shuffledItems = [...puzzleItems].sort(() => Math.random() - 0.5)
            setSequence(shuffledItems)
            setCurrentItem(shuffledItems[0]) // Start with the first item in the shuffled sequence
        }

        if (mode === "location") {
            // For location mode, randomly select an item and ask "Where is this item?"
            const randomItem = puzzleItems[Math.floor(Math.random() * puzzleItems.length)]
            setCurrentItem(randomItem)
        }
    }

    // Check the user's answer for location puzzle
    const checkAnswer = (userAnswer) => {
        if (!userAnswer || !currentItem) return

        if (gameMode === "location") {
            // Location puzzle: Find the room that contains the item
            const correctRoom = rooms.find((room) =>
                room.items.includes(currentItem)
            )

            if (correctRoom && correctRoom.name.toLowerCase() === userAnswer.toLowerCase()) {
                setFeedback("Correct! You found the item in the right room.")
                // After answering correctly, select a new random item
                const nextItem = puzzleItems[Math.floor(Math.random() * puzzleItems.length)]
                setCurrentItem(nextItem);
            } else {
                setFeedback("Incorrect! Try again.")
            }
        }

        if (gameMode === "sequence") {
            if (!userAnswer || !currentItem) return;

            // Check if the player's answer is correct
            const correctRoom = rooms.find((room) =>
                room.items.includes(currentItem)
            )

            // If the player is correct, move to the next item in the sequence
            if (correctRoom && correctRoom.name.toLowerCase() === userAnswer.toLowerCase()) {
                setFeedback("Correct!");
                if (currentIndex < sequence.length - 1) {
                    // Move to the next item in the sequence
                    setCurrentIndex(currentIndex + 1);
                    setCurrentItem(sequence[currentIndex + 1])
                } else {
                    // If all items are correct, the puzzle is complete
                    setFeedback("Congratulations! You completed the sequence.");
                }
            } else {
                setFeedback("Incorrect! Try again.");
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            {/* Header */}
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Memory Palace Game</h1>

            {/* Timer and Game Controls */}
            <div className="mb-6 flex justify-between items-center">
                <div className="text-xl text-gray-600">Time: {timer}s</div>
                {!gameStarted && (
                    <div>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600 transition"
                            onClick={() => startGame("sequence")}
                        >
                            Start Sequence Puzzle
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                            onClick={() => startGame("location")}
                        >
                            Start Location Puzzle
                        </button>
                    </div>
                )}
            </div>

            {/* Game Feedback */}
            {feedback && (
                <div className="mt-4 text-lg text-center">
                    <p className={`font-semibold ${feedback.includes("Correct") ? 'text-green-500' : 'text-red-500'}`}>
                        {feedback}
                    </p>
                </div>
            )}

            {/* Current Item Prompt (Location Puzzle) */}
            {gameStarted && gameMode === "location" && currentItem && (
                <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800">Where is the '{currentItem}'?</h3>
                    <input
                        type="text"
                        placeholder="Type the room name"
                        className="w-full mt-4 p-3 border rounded-lg text-gray-700"
                        onChange={(event) => checkAnswer(event.target.value)}
                    />
                </div>
            )}

            {gameStarted && gameMode === "sequence" && currentItem && (
                <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Where is the '{currentItem}'? (Item {currentIndex + 1} of {sequence.length})
                    </h3>
                    <input
                        type="text"
                        placeholder="Type the room name"
                        className="w-full mt-4 p-3 border rounded-lg text-gray-700"
                        onChange={(event) => checkAnswer(event.target.value)}
                    />
                </div>
            )}

            {/* Room Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
                        style={{
                            backgroundColor: room.bgColor,
                            boxShadow: room.bgColor === "#f3f4f6" ? "none" : "0 0 15px rgba(0, 0, 0, 0.2)",
                        }}
                        onClick={() => setSelectedRoom(room.id)}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800">{room.name}</h2>
                        <ul className="mt-2 text-gray-600">
                            {room.items.length > 0 ? (
                                room.items.map((item, index) => (
                                    <li key={index} className="text-sm">{item}</li>
                                ))
                            ) : (
                                <li className="text-sm text-gray-400">No items here</li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Add Item Section */}
            {selectedRoom && !gameStarted && (
                <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-800">Add Item to {rooms.find((r) => r.id === selectedRoom).name}</h3>
                    <input
                        type="text"
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                        placeholder="Enter item"
                        className="w-full mt-4 p-3 border rounded-lg text-gray-700"
                    />
                    <button
                        onClick={addItemToRoom}
                        className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Add Item
                    </button>
                </div>
            )}

        </div>
    )
}

export default MemoryPalaceGame