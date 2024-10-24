import React, { useEffect, useState } from 'react'
import MeditationCard from './MeditationCard'

const MeditationList = () => {
    const [meditations, setMeditations] = useState([])

    useEffect(() => {
        const dummyMeditations = [
            { id: 1, title: "Morning Calm", duration: 10 },
            { id: 2, title: "Evening Relaxation", duration: 20 },
            { id: 3, title: "Focus Boost", duration: 15 },
        ]
        setMeditations(dummyMeditations)
    }, [])

    return (
        <div className="flex justify-evenly items-center gap-4 p-8">
            {meditations.map(meditation => (
                <MeditationCard key={meditation.id} meditation={meditation} />
            ))}
        </div>
    )
}

export default MeditationList