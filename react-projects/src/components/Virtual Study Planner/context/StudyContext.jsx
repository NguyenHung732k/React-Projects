import React, { createContext, useState, useContext } from 'react'

const StudyContext = createContext()

const StudyProvider = ({ children }) => {
    const [goals, setGoals] = useState([])
    const [sessions, setSessions] = useState([])
    const [resources, setResources] = useState([])
    const [notes, setNotes] = useState([])
    const [progress, setProgress] = useState({ totalHours: 0, completedSessions: 0 })
    const [reminders, setReminders] = useState([])

    return (
        <StudyContext.Provider
            value={{
                goals,
                setGoals,
                sessions,
                setSessions,
                resources,
                setResources,
                notes,
                setNotes,
                progress,
                setProgress,
                reminders,
                setReminders,
            }}
        >
            {children}
        </StudyContext.Provider>
    )
}

const useStudy = () => useContext(StudyContext)

export { StudyProvider, useStudy }