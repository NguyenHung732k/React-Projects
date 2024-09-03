import React, { useEffect, useState } from 'react'
import Tours from './Tours'

import tourData from './tourData'

const ToursApp = () => {

    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState(tourData)

    const deleteTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }


    return (
        <div className="w-full m-auto">
            {tourData && tourData.length > 0 ? (
                <Tours tours={tours} deleteTour={deleteTour} />

            ) : (
                <h2 className="text-center mb-16">No Tour Left</h2>
            )
            }
        </div>
    )
}

export default ToursApp