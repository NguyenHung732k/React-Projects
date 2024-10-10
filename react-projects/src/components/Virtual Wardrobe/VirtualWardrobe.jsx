import React, { useState } from 'react'
import Header from './Header'
import UploadForm from './UploadForm'
import OutfitGallery from './OutfitGallery'
import Planner from './Planner'

const VirtualWardrobe = () => {

    const [outfits, setOutfits] = useState([])

    const handleUpload = (outfit) => {
        setOutfits([...outfits, outfit])
    }

    return (
        <div className="container mx-auto p-4">
            <Header />
            <UploadForm onUpload={handleUpload} />
            <OutfitGallery outfits={outfits} />
            <Planner outfits={outfits} />
        </div>
    )
}

export default VirtualWardrobe