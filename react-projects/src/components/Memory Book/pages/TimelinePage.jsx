import React from "react"
import Timeline from "../components/Timeline"

const TimelinePage = ({ events }) => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
            <Timeline events={events} />
        </div>
    )
}

export default TimelinePage