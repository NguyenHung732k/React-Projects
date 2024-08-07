import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'


const Recipe = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RecipeList />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
        </Router>
    )
}

export default Recipe