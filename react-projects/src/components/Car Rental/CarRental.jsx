import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HeroSection from './HeroSection'
import CarList from './CarList'
import CarDetails from './CarDetails'

const cars = [
    {
        id: '1',
        name: 'Ford Mustang',
        description: 'A powerful American muscle car.',
        price: 200,
        image: '/images/mustang.jpg',
        type: 'Sedan',
    },
    {
        id: '2',
        name: 'Tesla Model 3',
        description: 'An electric car for the modern world.',
        price: 150,
        image: '/images/tesla.jpg',
        type: 'Sedan',
    },
    {
        id: '3',
        name: 'Chevrolet Tahoe',
        description: 'A spacious and rugged SUV.',
        price: 250,
        image: '/images/tahoe.jpg',
        type: 'SUV',
    },
    {
        id: '4',
        name: 'BMW Z4',
        description: 'A luxury convertible with a sleek design.',
        price: 300,
        image: '/images/bmw_z4.jpg',
        type: 'Convertible',
    },
    {
        id: '5',
        name: 'BMW Z4',
        description: 'A luxury convertible with a sleek design.',
        price: 300,
        image: '/images/bmw_z4.jpg',
        type: 'Convertible',
    },
]

const CarRental = () => {
    const [filteredCars, setFilteredCars] = useState(cars)

    const handleFilterChange = ({ carType, priceRange }) => {
        const filtered = cars.filter((car) => {
            const matchesType = carType ? car.type === carType : true
            const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1]
            return matchesType && matchesPrice;
        })
        setFilteredCars(filtered)
    }

    return (
        <Router>
            <div className="font-sans bg-background">
                <HeroSection />
                <Routes>
                    <Route exact path="/" element={<CarList cars={filteredCars} onFilterChange={handleFilterChange} />} />
                    <Route path="/car/:carId" element={<CarDetails cars={cars} />} />
                </Routes>
            </div>
        </Router>
    )
}

export default CarRental