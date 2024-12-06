import React, { useState } from 'react'
import CarCard from './CarCard'
import CarFilters from './CarFilters'

const CarList = ({ cars }) => {
    const [filteredCars, setFilteredCars] = useState(cars)

    const handleFilterChange = ({ carType, priceRange }) => {
        const filtered = cars.filter((car) => {
            const matchesType = carType ? car.type === carType : true
            const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1]
            return matchesType && matchesPrice
        })
        setFilteredCars(filtered)
    }

    return (
        <div className="p-6">
            <CarFilters onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    )
}

export default CarList