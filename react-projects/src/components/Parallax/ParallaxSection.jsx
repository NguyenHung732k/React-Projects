import React from 'react'

const ParallaxSection = ({ image, children }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})`, backgroundAttachment: 'fixed' }}
            />
            <div className="relative flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="text-white text-center p-8 md:p-16 z-10">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ParallaxSection