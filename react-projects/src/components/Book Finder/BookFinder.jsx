import React, { useState } from 'react'
import MoodSelector from './MoodSelector'
import BookList from './BookList'

const moodDescriptions = {
    Happy: "You're feeling joyful! Here's something to keep that positivity going.",
    Sad: "It's okay to feel sad. These books can offer comfort and understanding.",
    Anxious: "Feeling anxious? These reads might help ease your mind.",
    Angry: "Channel that anger into something powerful with these books.",
    Relaxed: "You're in a calm state—perfect for some light reading!",
};

const BookFinder = () => {
    const [mood, setMood] = useState('Happy')

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Mood-Based Book Finder</h1>
            <MoodSelector setMood={setMood} />
            <p className="bg-gray-100 border-l-4 border-blue-500 italic p-4 mb-6">
                {moodDescriptions[mood]}
            </p>
            <BookList mood={mood} />
        </div>
    )
}

export default BookFinder