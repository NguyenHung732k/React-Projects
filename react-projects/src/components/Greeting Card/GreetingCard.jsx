import React, { useState } from 'react'
import CardEditor from './CardEditor'
import CardPreview from './CardPreview'
import SendCard from './SendCard'
import FloatingActionButton from './FloatingActionButton'


const GreetingCard = () => {

    const [cardData, setCardData] = useState({ text: "", image: null })

    const handleCardChange = (newData) => {
        setCardData(newData)
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-50 p-6 space-y-6">
            <h1 className="text-3xl font-bold text-darkBlue">Design Your Greeting Card</h1>
            <div className="w-4/6 flex space-x-6">
                <CardEditor onChange={handleCardChange} />
                <CardPreview text={cardData.text} image={cardData.image} />
            </div>
            <SendCard cardData={cardData} />
            <FloatingActionButton cardData={cardData} />
        </div>
    )
}

export default GreetingCard