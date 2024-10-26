import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'

const artworks = [
    { id: 1, title: 'Artwork 1', description: 'Description 1', imageUrl: 'url1' },
    { id: 2, title: 'Artwork 2', description: 'Description 2', imageUrl: 'url2' },
    // Add more artworks
]

const ArtPortfolio = () => {
    return (
        <Router>
            <Header />
            <h1 className="ml-8">Welcome to My Art Portfolio</h1>
            <Routes>
                <Route path="/portfolio" element={<Portfolio artworks={artworks} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default ArtPortfolio