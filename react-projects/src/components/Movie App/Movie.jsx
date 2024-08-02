import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import MovieDetail from './MovieDetail'

const Movie = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />

        </Routes>
    </Router>
)

export default Movie