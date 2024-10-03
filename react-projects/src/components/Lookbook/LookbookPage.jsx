import React, { useState } from 'react'
import Header from './components/Header'
import Lookbook from './components/Lookbook'
import CreateLookbook from './pages/CreateLookbook'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const LookbookPage = () => {
    const [items, setItems] = useState([])

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Lookbook items={items} />} />
                    <Route path="/create" element={<CreateLookbook setItems={setItems} />} />
                </Routes>
            </div>
        </Router>
    )
}

export default LookbookPage