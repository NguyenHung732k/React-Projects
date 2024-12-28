import React, { useState } from 'react'
import ExhibitInfoSidebar from '../components/ExhibitInfoSidebar'
import VirtualTour from '../components/VirtualTour'
import AudioPlayer from '../components/AudioPlayer'


const ExhibitDetailPage = () => {
    const exhibit = {
        id: "1",
        name: "The Mona Lisa",
        artist: "Leonardo da Vinci",
        description: "The Mona Lisa is a half-length portrait of a woman by the Italian Renaissance artist Leonardo da Vinci.",
        imageUrl: "/images/mona-lisa.jpg",
        audioUrl: "/audio/mona-lisa.mp3",
        tourImageUrl: "/images/mona-lisa-tour.jpg"
    }

    return (
        <div className="flex flex-col justify-between items-center md:flex-row p-6">
            <div className="w-11/12 flex justify-center items-center">
                <VirtualTour image={exhibit.tourImageUrl} />
                <ExhibitInfoSidebar exhibit={exhibit} />
            </div>
            <AudioPlayer audioUrl={exhibit.audioUrl} />
        </div>
    )
}

export default ExhibitDetailPage