import React from 'react';
import Countdown from './Countdown'

const CountdownDigitFlip = () => {
    const targetDate = '2025-12-31T23:59:59'

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-gray-900 text-white px-4 font-sans">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
                ⏳ Event Countdown
            </h1>
            <Countdown targetDate={targetDate} />
        </div>
    )
}

export default CountdownDigitFlip