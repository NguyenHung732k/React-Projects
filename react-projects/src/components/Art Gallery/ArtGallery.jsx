import React, { useState } from 'react'
import Gallery from './Gallery'
import ArtworkDetail from './ArtworkDetail'
import Header from './Header'


const artworks = [
    { id: 1, image: 'art1.jpg', title: 'Sunset', artist: 'Jane Doe', description: 'A beautiful sunset over the mountains.' },
    { id: 2, image: 'art2.jpg', title: 'Ocean Waves', artist: 'John Smith', description: 'Calm ocean waves crashing on the shore.' },
]


const ArtGallery = () => {

    const [selectedArtwork, setSelectedArtwork] = useState(null)


    return (
        <div className="w-screen h-screen flex flex-col justify-start items-start">
            <Header />
            <main className="mt-20">
                <Gallery artworks={artworks} onSelect={setSelectedArtwork} />
                {selectedArtwork && (
                    <ArtworkDetail
                        artwork={selectedArtwork}
                        onClose={() => setSelectedArtwork(null)}
                    />
                )}
            </main>
        </div>
    )
}

export default ArtGallery