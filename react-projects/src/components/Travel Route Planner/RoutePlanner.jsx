import React, { useState } from 'react'
import Header from './Header'
import RouteForm from './RouteForm'
import Map from './Map'
import Itinerary from './Itinerary'

const RoutePlanner = () => {

    const [destinations, setDestinations] = useState([])

    const handleRouteSubmit = (newDestinations) => {
        setDestinations(newDestinations)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <RouteForm onSubmit={handleRouteSubmit} />
            <Map destinations={destinations} />
            {destinations.length > 0 && <Itinerary destinations={destinations} />}
        </div>
    )
}

export default RoutePlanner