import React, { useState } from "react"
import Sidebar from "./Sidebar"
import LearningItem from "./LearningItem"
import AddItemModal from "./AddItemModal"
import Timer from "./Timer"
import ProgressBar from "./ProgressBar"

const LearningDashboard = () => {
    const [items, setItems] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [sessions, setSessions] = useState([])

    const addItem = (newItem) => {
        setItems([...items, newItem])
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const onDelete = (itemId) => {
        setItems(items.filter((item, index) => index !== itemId))
    }

    const recordSession = (time) => {
        setSessions([...sessions, time])
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-6 bg-gradient-to-r from-blue-100 to-teal-100 shadow-lg rounded-xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">My Learning Dashboard</h1>
                    <button
                        onClick={openModal}
                        className="flex items-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
                    >
                        <svg className="w-5 h-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                        </svg>
                        Add New Item
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Learning Items</h2>
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <LearningItem key={index} item={item} onDelete={() => onDelete(index)} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Study Timer</h2>
                        <Timer recordSession={recordSession} />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Progress</h2>
                        {items.map((item, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <ProgressBar progress={item.progress} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-700">Study Sessions</h2>
                    <ul className="space-y-2">
                        {sessions.map((session, index) => (
                            <li key={index} className="bg-gray-200 p-2 rounded-md">
                                {session}s
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <AddItemModal isOpen={isModalOpen} onClose={closeModal} addItem={addItem} />
        </div>
    )
}

export default LearningDashboard