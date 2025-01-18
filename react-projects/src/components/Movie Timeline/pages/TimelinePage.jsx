import { useState, useEffect } from "react"
import AddEventForm from "../components/AddEventForm"
import Timeline from "../components/Timeline"

const TimelinePage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("timelineEvents")) || []
        setEvents(savedEvents)
    }, [])

    useEffect(() => {
        localStorage.setItem("timelineEvents", JSON.stringify(events))
    }, [events])

    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent])
    }

    return (
        <div className="w-full flex flex-col justify-center items-center my-8 px-4 py-8">
            <AddEventForm addEvent={addEvent} />
            <Timeline events={events} />
        </div>
    )
}

export default TimelinePage