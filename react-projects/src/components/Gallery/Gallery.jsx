import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Home from './HomePage'
import ImageDetail from './ImageDetail'

const Gallery = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image/:id" element={<ImageDetail />} />
            </Routes>
        </Router>
    )
}

export default Gallery