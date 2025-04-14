import React, { useState, useEffect } from 'react'

const Avatar = ({ selectedFace, selectedHair, selectedAccessory, selectedOutfit }) => {
    const [fade, setFade] = useState(true)

    useEffect(() => {
        setFade(false)
        const timer = setTimeout(() => setFade(true), 500)
        return () => clearTimeout(timer)
    }, [selectedFace, selectedHair, selectedAccessory, selectedOutfit])

    return (
        <div className="relative w-64 h-64 bg-gray-100 rounded-full overflow-hidden transition-all duration-500 ease-in-out">
            <img
                src={selectedFace}
                alt="Face"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
                src={selectedHair}
                alt="Hair"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
                src={selectedAccessory}
                alt="Accessory"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            <img
                src={selectedOutfit}
                alt="Outfit"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    )
}

export default Avatar