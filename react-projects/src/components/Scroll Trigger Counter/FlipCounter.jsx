import React from 'react';
import FlipDigit from './FlipDigit'

const FlipCounter = ({ value, animate }) => {
    const digits = value.toString().padStart(4, '0').split('')

    return (
        <div className="flex justify-center gap-2 px-4 py-6 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl shadow-xl">
            {digits.map((digit, index) => (
                <FlipDigit key={index} digit={parseInt(digit)} animate={animate} />
            ))}
        </div>
    )
}

export default FlipCounter