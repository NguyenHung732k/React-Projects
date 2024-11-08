import React from "react"

const SaveAndShare = ({ furnitureInRoom }) => {
    const saveDesign = () => {
        localStorage.setItem("roomDesign", JSON.stringify(furnitureInRoom))
        alert("Room design saved!")
    }

    return (
        <button
            className="fixed bottom-8 right-8 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all duration-200"
            onClick={saveDesign}
        >
            <span className="text-xl">💾</span>
        </button>
    )
}

export default SaveAndShare