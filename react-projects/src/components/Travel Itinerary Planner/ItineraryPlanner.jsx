import React, { useState } from 'react'
import Header from './Header'
import ItineraryForm from './ItineraryForm'
import ItineraryList from './ItineraryList'
import CalendarView from './CalendarView'

const ItineraryPlanner = () => {
    const [activities, setActivities] = useState([])

    const addActivity = (activity) => {
        setActivities([...activities, activity])
    }


    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="w-4/6 mx-auto p-4">
                <ItineraryForm addActivity={addActivity} />
                <ItineraryList activities={activities} />
                <CalendarView activities={activities} />
            </main>
        </div>
    )
}

export default ItineraryPlanner