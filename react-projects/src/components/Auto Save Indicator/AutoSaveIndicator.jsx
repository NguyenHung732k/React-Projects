import React, { useState, useEffect } from "react"

import './AutoSaveIndicator.css'

const AutoSaveIndicator = () => {
    const [isSaving, setIsSaving] = useState(false)
    const [statusText, setStatusText] = useState("All changes saved")
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const autoSaveInterval = setInterval(() => {
            setIsSaving(true)
            setStatusText("Saving...")
            setIsVisible(true)

            // Simulate saving and after 2 seconds, set status to 'All changes saved'
            setTimeout(() => {
                setIsSaving(false)
                setStatusText("All changes saved")

                // Hide indicator after 2 more seconds
                setTimeout(() => {
                    setIsVisible(false)
                }, 2000)
            }, 2000)
        }, 5000) // Auto-save happens every 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(autoSaveInterval)
    }, [])

    return (
        <div
            className={`auto-save-indicator ${isVisible ? "visible" : "hidden"} ${isSaving ? "saving" : "saved"
                }`}
        >
            {/* Shimmer effect while saving */}
            {/* <div className={`shimmer ${isSaving ? "visible" : "hidden"}`} /> */}
            <div className={`spinner ${isSaving ? "visible" : "hidden"}`} />
            <span>{statusText}</span>
        </div>
    )
}

export default AutoSaveIndicator