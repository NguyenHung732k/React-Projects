import React from 'react'

const SeatSelection = ({ selectedSeats, onSeatClick }) => {
    const seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4']

    return (
        <div className="grid grid-cols-4 gap-4">
            {seats.map(seat => (
                <button
                    key={seat}
                    onClick={() => onSeatClick(seat)}
                    className={`border-2 p-4 rounded-md text-center transition-transform transform hover:scale-105 active:bg-blue-500 
              ${selectedSeats.includes(seat) ? 'bg-blue-500 text-white' : 'bg-white'}`}
                >
                    {seat}
                </button>
            ))}
        </div>
    )
}

export default SeatSelection