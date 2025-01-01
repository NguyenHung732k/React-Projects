import React, { useState } from 'react'
import Timer from './Timer'
import Settings from './Settings'
import Progress from './Progress'
import Reports from './Reports'

const StudyTimer = () => {
    const [studyTime, setStudyTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)
    const [focusPercentage, setFocusPercentage] = useState(80)
    const [isSettingsVisible, setIsSettingsVisible] = useState(false)

    const saveSettings = (newStudyTime, newBreakTime) => {
        setStudyTime(newStudyTime)
        setBreakTime(newBreakTime)
    }

    return (
        <div className="App bg-background min-h-screen flex flex-col items-center justify-center p-6">
            <div className="container max-w-xl w-full bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-semibold text-center text-primary mb-8">
                    Personalized Study Timer
                </h1>

                <Timer studyTime={studyTime} breakTime={breakTime} />

                <div className="my-6 text-center">
                    <button
                        onClick={() => setIsSettingsVisible((prev) => !prev)}
                        className="bg-accent py-2 px-6 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
                    >
                        {isSettingsVisible ? 'Hide Settings' : 'Change Timer Settings'}
                    </button>
                </div>

                {isSettingsVisible && (
                    <div className="mt-8">
                        <Settings onSaveSettings={saveSettings} />
                    </div>
                )}

                <Progress focusPercentage={focusPercentage} />

                <Reports />
            </div>
        </div>
    )
}

export default StudyTimer