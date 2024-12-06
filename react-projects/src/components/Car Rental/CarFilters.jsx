import React, { useState } from 'react'

const CarFilters = ({ onFilterChange }) => {
    const [carType, setCarType] = useState('')
    const [priceRange, setPriceRange] = useState([0, 500])

    const handleFilterChange = () => {
        onFilterChange({ carType, priceRange })
    }

    return (
        <div className="p-4 bg-white border rounded-lg shadow-md sticky top-0 z-10">
            <h2 className="font-bold text-lg mb-4">Filters</h2>

            <div className="space-y-4">
                <div>
                    <label className="block font-semibold">Car Type</label>
                    <select
                        value={carType}
                        onChange={(event) => setCarType(event.target.value)}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="">All Types</option>
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Convertible">Convertible</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold">Price Range</label>
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(event) => setPriceRange([0, event.target.value])}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>

                <button
                    onClick={handleFilterChange}
                    className="bg-primary text-white w-full p-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    )
}

export default CarFilters