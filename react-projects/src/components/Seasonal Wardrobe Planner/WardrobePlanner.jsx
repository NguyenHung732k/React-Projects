import React, { useState } from 'react'
import Navbar from './components/Navbar'
import OutfitSuggestions from './components/OutfitSuggestions'
import ClothingCategory from './components/ClothingCategory'
import TravelChecklist from './components/TravelChecklist'
import UsageTracker from './components/UsageTracker'

const WardrobePlanner = () => {
    const weatherData = {
        temp: 22,
        condition: 'Clear sky',
        icon: '01d',
    }

    const [clothes, setClothes] = useState([
        { id: 1, name: 'T-shirt', season: 'Spring', image: 'https://placehold.co/300x200' },
        { id: 2, name: 'Jeans', season: 'Spring', image: 'https://placehold.co/300x200' },
        { id: 3, name: 'Sunglasses', season: 'Summer', image: 'https://placehold.co/300x200' },
        { id: 4, name: 'Jacket', season: 'Winter', image: 'https://placehold.co/300x200' },
    ])

    const [selectedItems, setSelectedItems] = useState([])

    const handleAddToTravelList = (item) => {
        setSelectedItems(prev => [...prev, item])
    }

    return (
        <div className="min-h-screen bg-gray-100 mt-20">
            <Navbar />
            <div className="container mx-auto p-6 space-y-12">
                <section id="outfit-suggestions">
                    <OutfitSuggestions
                        weatherData={weatherData}
                        clothes={clothes}
                    />
                </section>

                <section id="clothing-category">
                    <ClothingCategory
                        clothes={clothes}
                        season="Spring"
                        handleAddToTravelList={handleAddToTravelList}
                    />
                </section>

                <section id="travel-checklist">
                    <TravelChecklist
                        clothes={clothes}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />
                </section>

                <section id="usage-tracker">
                    <UsageTracker clothes={clothes} />
                </section>
            </div>
        </div>
    )
}

export default WardrobePlanner