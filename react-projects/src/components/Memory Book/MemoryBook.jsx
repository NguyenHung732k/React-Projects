import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MemoryBookPage from "./pages/MemoryBookPage"
import CreateMemory from "./pages/CreateMemory"
import TimelinePage from "./pages/TimelinePage"
import Header from "./components/Header"

const MemoryBook = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Wedding Day", description: "A beautiful day!", date: "2025-01-01", thumbnail: "/path/to/image.jpg" },
    { id: 2, title: "Birthday Bash", description: "Celebrating another year!", date: "2025-01-15", thumbnail: "/path/to/image2.jpg" },
    { id: 3, title: "Vacation to Paris", description: "A trip of a lifetime!", date: "2025-02-01", thumbnail: "/path/to/image3.jpg" },
  ])

  const handleCreateMemory = (newMemory) => {
    setEvents([...events, newMemory])
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<MemoryBookPage events={events} />} />
          <Route path="/create-memory" element={<CreateMemory onCreateMemory={handleCreateMemory} />} />
          <Route path="/timeline" element={<TimelinePage events={events} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default MemoryBook