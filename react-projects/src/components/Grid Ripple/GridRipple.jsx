import React from 'react'
import GridItem from './GridItem'
import './GridRipple.css'

const GridRipple = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100 p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                {[...Array(16)].map((_, index) => (
                    <GridItem key={index} rippleColor="rgba(255, 255, 255, 0.8)" highlightColor="bg-blue-400">
                        <div className="text-white font-semibold text-xl">{`Item ${index + 1}`}</div>
                    </GridItem>
                ))}
            </div>
        </div>
    )
}

export default GridRipple