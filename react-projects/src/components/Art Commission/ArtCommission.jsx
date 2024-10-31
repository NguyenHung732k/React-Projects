import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import ArtistProfile from './ArtistProfile'
import Dashboard from './Dashboard'
import ToastNotification from './ToastNotification'

const ArtCommission = () => {

    const sampleArtist = {
        name: "Artist A",
        bio: "An experienced artist specializing in digital art.",
        artworks: [
            { id: 1, title: "Artwork 1", imageUrl: "image1.jpg", rating: 4.5 },
            { id: 2, title: "Artwork 2", imageUrl: "image2.jpg", rating: 4.0 },
        ],
    }

    const [toastMessage, setToastMessage] = useState('')
    const [isToastVisible, setIsToastVisible] = useState(false)

    const handleRequestSubmit = (details) => {
        setToastMessage(`Request for "${details.title}" submitted!`)
        setIsToastVisible(true)
    }

    const handleToastClose = () => {
        setIsToastVisible(false)
    }

    return (
        <Router>
            <Header />
            <ToastNotification message={toastMessage} isVisible={isToastVisible} onClose={handleToastClose} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artists/:artistId" element={<ArtistProfile artist={sampleArtist} />} />
                <Route path="/dashboard" element={<Dashboard artist={sampleArtist} />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default ArtCommission