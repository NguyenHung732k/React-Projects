import React, { useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const CropImage = ({ imageSrc, onCropComplete }) => {
    const [crop, setCrop] = useState({ unit: '%', width: 90, aspect: 1 });


    const onCropChange = (newCrop) => {
        setCrop(newCrop)
    }

    const onCropFinish = (crop) => {
        onCropComplete(crop)
    }

    return (
        <div className="mt-6">
            <ReactCrop
                src={imageSrc}
                crop={crop}
                onChange={onCropChange}
                onComplete={onCropFinish}
            />
        </div>
    )
}

export default CropImage