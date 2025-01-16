import React, { useState } from 'react'
import GoalCategory from './GoalCategory'
import AddItemModal from './AddItemModal'

const VisionBoard = () => {
    const [showModal, setShowModal] = useState(false)
    const [goals, setGoals] = useState([
        { id: 1, category: 'Career', text: 'Get a promotion', type: 'quote' },
        { id: 2, category: 'Health', text: 'Run a marathon', type: 'image' },
    ])

    const toggleModal = () => setShowModal(!showModal)

    const addGoal = (goal) => {
        setGoals((prevGoals) => [...prevGoals, goal])
        setShowModal(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-300 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-semibold text-white">Digital Vision Board</h1>
                    <p className="text-lg text-gray-100 mt-2">Visualize your dreams, track progress, and share them with others.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-8">
                    <GoalCategory category="Career" goals={goals.filter((goal) => goal.category === 'Career')} />
                    <GoalCategory category="Relationships" goals={goals.filter((goal) => goal.category === 'Relationships')} />
                    <GoalCategory category="Health" goals={goals.filter((goal) => goal.category === 'Health')} />
                </div>

                <button
                    onClick={toggleModal}
                    className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg transform transition-all hover:scale-110">
                    + Add Goal
                </button>

                {showModal && <AddItemModal addGoal={addGoal} toggleModal={toggleModal} />}
            </div>
        </div>
    )
}

export default VisionBoard