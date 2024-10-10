import React, { useState } from 'react'

const Planner = ({ outfits }) => {
    const [selectedOutfit, setSelectedOutfit] = useState('')

    return (
        <div className="border p-4 rounded shadow-lg">
            <h2 className="text-xl font-bold">Plan Your Outfit</h2>
            <select
                onChange={(event) => setSelectedOutfit(event.target.value)}
                className="border p-2 mt-2 w-full"
            >
                <option value="">Select an Outfit</option>
                {outfits.map((outfit, index) => (
                    <option key={index} value={outfit.name}>{outfit.name}</option>
                ))}
            </select>
            <button className="mt-2 bg-green-500 text-white p-2 rounded">Plan Outfit</button>
        </div>
    )
}

export default Planner