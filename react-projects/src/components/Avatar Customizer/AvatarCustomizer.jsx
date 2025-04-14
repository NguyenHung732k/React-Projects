import React, { useState, useRef } from 'react'
import Avatar from './Avatar'
import CustomizationPanel from './CustomizationPanel'
import ExportButton from './ExportButton'

const AvatarCustomizer = () => {
    const avatarRef = useRef(null)

    const [selectedFace, setSelectedFace] = useState("/assets/face1.png")
    const [selectedHair, setSelectedHair] = useState("/assets/hair1.png")
    const [selectedAccessory, setSelectedAccessory] = useState("/assets/accessory1.png")
    const [selectedOutfit, setSelectedOutfit] = useState("/assets/outfit1.png")

    const faces = [
        { src: "/assets/face1.png", alt: "Face 1" },
        { src: "/assets/face2.png", alt: "Face 2" },
    ]

    const hairs = [
        { src: "/assets/hair1.png", alt: "Hair 1" },
        { src: "/assets/hair2.png", alt: "Hair 2" },
    ]

    const accessories = [
        { src: "/assets/accessory1.png", alt: "Accessory 1" },
        { src: "/assets/accessory2.png", alt: "Accessory 2" },
    ]

    const outfits = [
        { src: "/assets/outfit1.png", alt: "Outfit 1" },
        { src: "/assets/outfit2.png", alt: "Outfit 2" },
    ]

    return (
        <div className="h-screen grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 bg-gray-50">
            <div className="flex justify-center">
                <div ref={avatarRef}>
                    <Avatar
                        selectedFace={selectedFace}
                        selectedHair={selectedHair}
                        selectedAccessory={selectedAccessory}
                        selectedOutfit={selectedOutfit}
                    />
                </div>
            </div>

            <div>
                <CustomizationPanel
                    onFaceChange={setSelectedFace}
                    onHairChange={setSelectedHair}
                    onAccessoryChange={setSelectedAccessory}
                    onOutfitChange={setSelectedOutfit}
                    faces={faces}
                    hairs={hairs}
                    accessories={accessories}
                    outfits={outfits}
                />
                <ExportButton avatarRef={avatarRef} />
            </div>
        </div>
    )
}

export default AvatarCustomizer