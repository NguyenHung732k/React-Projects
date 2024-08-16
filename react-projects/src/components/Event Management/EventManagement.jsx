import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EventList from './EventList'
import EventForm from './EventForm'
import EventDetails from './EventDetails'
import { EventProvider } from './contexts/EventContext'

const EventManagement = () => {


    return (
        <EventProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<EventList />} />
                    <Route path="/create" element={<EventForm />} />
                    <Route path="/edit/:id" element={<EventForm />} />
                    <Route path="/events/:id" element={<EventDetails />} />
                </Routes>
            </Router>
        </EventProvider>
    )
}

export default EventManagement