import React, { useState } from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa"
import "./RippleBurstList.css"

const RippleBurstList = () => {
    const [added, setAdded] = useState(false)
    const [undoVisible, setUndoVisible] = useState(false)

    const handleAddToList = () => {
        setAdded(true)
        setUndoVisible(true)

        // Automatically hide undo button after 3 seconds
        setTimeout(() => {
            setUndoVisible(false)
        }, 3000)
    }

    const handleUndo = () => {
        setAdded(false)
        setUndoVisible(false)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="relative">
                <button
                    onClick={handleAddToList}
                    className="relative overflow-hidden bg-pink-600 text-white p-4 md:p-5 rounded-full shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                >
                    <span className={`absolute inset-0 bg-pink-200 rounded-full animate-ripple`} />
                    <div className="transition-all ease-in-out">
                        {added ? (
                            <FaHeart size={26} className="pulse" />
                        ) : (
                            <FaHeartBroken size={26} />
                        )}
                    </div>
                </button>

                {undoVisible && (
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleUndo}
                            className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-lg transform hover:scale-105 focus:outline-none transition-all"
                        >
                            Undo
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RippleBurstList