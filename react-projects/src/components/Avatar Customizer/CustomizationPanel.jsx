import React from 'react'

const CustomizationPanel = ({ onFaceChange, onHairChange, onAccessoryChange, onOutfitChange, faces, hairs, accessories, outfits }) => {
    return (
        <div className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h2 className="text-xl font-bold text-center">Customize Your Avatar</h2>

            {/* Face Selection */}
            <div>
                <h3 className="font-semibold">Choose Face:</h3>
                <div className="flex space-x-4 overflow-x-auto">
                    {faces.map((face) => (
                        <button key={face.src} onClick={() => onFaceChange(face.src)} className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-200 hover:scale-105">
                            <img src={face.src} alt={face.alt} className="w-full h-full object-cover rounded-full" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Hair Selection */}
            <div>
                <h3 className="font-semibold">Choose Hair:</h3>
                <div className="flex space-x-4 overflow-x-auto">
                    {hairs.map((hair) => (
                        <button key={hair.src} onClick={() => onHairChange(hair.src)} className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-200 hover:scale-105">
                            <img src={hair.src} alt={hair.alt} className="w-full h-full object-cover rounded-full" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Accessories */}
            <div>
                <h3 className="font-semibold">Choose Accessories:</h3>
                <div className="flex space-x-4 overflow-x-auto">
                    {accessories.map((accessory) => (
                        <button key={accessory.src} onClick={() => onAccessoryChange(accessory.src)} className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-200 hover:scale-105">
                            <img src={accessory.src} alt={accessory.alt} className="w-full h-full object-cover rounded-full" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Outfit Selection */}
            <div>
                <h3 className="font-semibold">Choose Outfit:</h3>
                <div className="flex space-x-4 overflow-x-auto">
                    {outfits.map((outfit) => (
                        <button key={outfit.src} onClick={() => onOutfitChange(outfit.src)} className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden transform transition-transform duration-200 hover:scale-105">
                            <img src={outfit.src} alt={outfit.alt} className="w-full h-full object-cover rounded-full" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomizationPanel;