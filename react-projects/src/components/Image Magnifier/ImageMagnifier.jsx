import React from 'react'
import Magnifier from './Magnifier'
import sampleImage from '../../assets/img-not-available.jpg'

const ImageMagnifier = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Magnifier
                src={sampleImage}
                zoom={3}
                lensSize={160}
                showPreviewPanel={true}
                previewSize={300}
            />
        </div>
    )
}

export default ImageMagnifier