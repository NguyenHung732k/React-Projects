import React, { useState } from 'react'

const AddItemModal = ({ addGoal, toggleModal }) => {
    const [goalText, setGoalText] = useState('')
    const [goalCategory, setGoalCategory] = useState('Career')
    const [goalType, setGoalType] = useState('image')

    const handleAddGoal = () => {
        const newGoal = {
            id: Date.now(),
            text: goalText,
            category: goalCategory,
            type: goalType,
        }

        addGoal(newGoal)
        setGoalText('')
        setGoalCategory('Career')
        setGoalType('image')
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">Add New Goal</h3>

                <input
                    type="text"
                    value={goalText}
                    onChange={(event) => setGoalText(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    placeholder="Enter goal description"
                />

                <select
                    value={goalCategory}
                    onChange={(event) => setGoalCategory(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md mb-4"
                >
                    <option value="Career">Career</option>
                    <option value="Relationships">Relationships</option>
                    <option value="Health">Health</option>
                </select>

                <select
                    value={goalType}
                    onChange={(event) => setGoalType(event.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md mb-4"
                >
                    <option value="image">Image</option>
                    <option value="quote">Quote</option>
                </select>

                <div className="flex justify-between">
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-red-600"
                        onClick={toggleModal}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-purple-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-purple-700"
                        onClick={handleAddGoal}
                    >
                        Add Goal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddItemModal