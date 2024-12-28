import React, { useState, useEffect } from 'react'
import LiveEventCard from '../components/LiveEventCard'
import ExhibitCard from '../components/ExhibitCard'

const HomePage = () => {
    const [events, setEvents] = useState([])
    const [exhibits, setExhibits] = useState([])

    useEffect(() => {
        // Fetch the list of live events (this could be from an API)
        const fetchedEvents = [
            {
                id: '1',
                title: 'Live Art Tour: Renaissance Art',
                description: 'Join us for a live tour of the Renaissance art collection.',
                date: '30/12/2024',
                imageUrl: '/images/renaissance-art-tour.jpg',
            },
            {
                id: '2',
                title: 'Modern Sculpture Showcase',
                description: 'Explore cutting-edge modern sculptures with our expert curator.',
                date: '25/12/2024',
                imageUrl: '/images/modern-sculpture-showcase.jpg',
            },
            // Add more event data here
        ]
        setEvents(fetchedEvents)

        // Fetch the list of exhibits (this could also be from an API)
        const fetchedExhibits = [
            {
                id: '1',
                title: 'Renaissance Masters',
                description: 'Explore the works of Renaissance artists such as Da Vinci, Michelangelo, and more.',
                openingDate: '2024-12-15T09:00:00Z',
                imageUrl: '/images/renaissance-masters.jpg',
            },
            {
                id: '2',
                title: 'Contemporary Photography',
                description: 'A collection of contemporary photography from international artists.',
                openingDate: '2024-12-15T09:00:00Z',
                imageUrl: '/images/contemporary-photography.jpg',
            },
            // Add more exhibits data here
        ]
        setExhibits(fetchedExhibits)

    }, [])

    return (
        <div className="container mx-auto gap-8 p-6">
            {/* Section for Exhibits */}
            <section>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Current and Upcoming Exhibits</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {exhibits.map((exhibit) => (
                        <ExhibitCard key={exhibit.id} exhibit={exhibit} />
                    ))}
                </div>
            </section>

            {/* Section for Live Events */}
            <section className="my-12">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Live Events</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <LiveEventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage