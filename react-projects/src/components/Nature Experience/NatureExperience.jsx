import React, { useState } from "react"
import SceneSelector from "./components/SceneSelector"
import SoundController from "./components/SoundController"
import Timer from "./components/Timer"
import MeditationMode from "./components/MeditationMode"

const NatureExperience = () => {
    const [sceneType, setSceneType] = useState("forest")
    const [isMeditationActive, setMeditationActive] = useState(false)
    const [isUserInteracted, setUserInteracted] = useState(false)

    const handleTimerEnd = () => {
        alert("Your relaxation session has ended. We hope you feel relaxed!")
    }

    const handleSceneChange = (newScene) => {
        setSceneType(newScene)
        setUserInteracted(true) // Mark interaction as true when scene is selected
    }

    const handleMeditationToggle = () => {
        setMeditationActive(!isMeditationActive)
        setUserInteracted(true) // Mark interaction as true when meditation is toggled
    }

    const sceneBackgrounds = {
        forest: "https://treesforall.nl/app/uploads/2022/03/Bos-Nederland-Epe-e1719389547661-0x835-c-default.webp",
        beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D",
        mountain: "https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-4.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop",
    }

    return (
        <div
            className="relative h-screen bg-cover bg-center transition-all"
            style={{
                backgroundImage: `url(${sceneBackgrounds[sceneType]})`,
            }}
        >
            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-center">
                <SceneSelector sceneType={sceneType} setSceneType={handleSceneChange} />
                <SoundController sceneType={sceneType} isUserInteracted={isUserInteracted} />
                <MeditationMode
                    isActive={isMeditationActive}
                    setMeditationActive={setMeditationActive}
                />

                <Timer onTimerEnd={handleTimerEnd} />
                <button
                    className="bg-indigo-600 text-white p-4 rounded-lg mr-40"
                    onClick={handleMeditationToggle}
                >
                    {isMeditationActive ? "Stop Meditation" : "Start Meditation"}
                </button>
            </div>
        </div>
    )
}

export default NatureExperience