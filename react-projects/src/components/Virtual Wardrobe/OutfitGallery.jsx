import React, { useState } from 'react'
import Modal from './Modal'

const OutfitGallery = ({ outfits }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedOutfit, setSelectedOutfit] = useState(null)

    const filteredOutfits = outfits.filter(outfit =>
        outfit.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search outfits..."
                onChange={(event) => setSearchTerm(event.target.value)}
                className="border p-2 mb-4 w-full"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredOutfits.map((outfit, index) => (
                    <div
                        key={index}
                        className="border p-2 rounded shadow cursor-pointer hover:shadow-lg transition"
                        onClick={() => setSelectedOutfit(outfit)}
                    >
                        <img src={URL.createObjectURL(outfit.file)} alt={outfit.name} className="w-full h-32 object-cover rounded" />
                        <h3 className="text-lg font-semibold">{outfit.name}</h3>
                        <p>{outfit.category}</p>
                    </div>
                ))}
            </div>

            {selectedOutfit && (
                <Modal onClose={() => setSelectedOutfit(null)}>
                    <img src={URL.createObjectURL(selectedOutfit.file)} alt={selectedOutfit.name} className="w-full h-auto" />
                    <h3 className="text-2xl">{selectedOutfit.name}</h3>
                    <p className="text-lg">{selectedOutfit.category}</p>
                </Modal>
            )}
        </div>
    )
}

export default OutfitGallery