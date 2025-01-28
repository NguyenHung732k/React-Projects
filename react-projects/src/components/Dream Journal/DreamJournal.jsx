import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import DreamList from "./components/DreamList"
import ShareDream from "./components/ShareDream"
import Analytics from "./components/Analytics"

const DreamJournal = () => {
    const [dreams, setDreams] = useState([])

    const addDream = (dream) => {
        setDreams((prev) => [...prev, dream])
    }

    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700">
                <Navbar />
                <div className="container mx-auto p-4">
                    <Routes>
                        <Route exact path="/" element={<DreamList dreams={dreams} />} />
                        <Route path="/share" element={<ShareDream addDream={addDream} />} />
                        <Route path="/analytics" element={<Analytics dreams={dreams} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default DreamJournal