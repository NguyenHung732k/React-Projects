import React from 'react'

const VirtualTour = ({ image }) => (
    <div className="relative w-full h-96">
        <img src={image} alt="Virtual Tour" className="w-full h-full object-cover" />
    </div>
)

export default VirtualTour