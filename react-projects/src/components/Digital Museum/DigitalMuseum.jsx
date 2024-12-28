import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ExhibitDetailPage from './pages/ExhibitDetailPage'
import BookmarksPage from './pages/BookmarksPage'
import LiveEventPage from './pages/LiveEventPage'
import Header from './components/Header'

function DigitalMuseum() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/exhibit/:id" element={<ExhibitDetailPage />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
                <Route path="/live-event/:id" element={<LiveEventPage />} />
            </Routes>
        </Router>
    )
}

export default DigitalMuseum