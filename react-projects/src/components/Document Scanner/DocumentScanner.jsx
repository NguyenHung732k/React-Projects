import React, { useState } from 'react'
import { jsPDF } from 'jspdf'
import CameraCapture from './CameraCapture'
import CropImage from './CropImage'
import ImageEnhancement from './ImageEnhancement'
import SavePanel from './SavePanel'

const DocumentScanner = () => {
    const [image, setImage] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [enhancement, setEnhancement] = useState({ brightness: 1, contrast: 1 })

    const handleCapture = (capturedImage) => {
        setImage(capturedImage)
    }

    const handleCropComplete = (crop) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.src = image
        img.onload = () => {
            canvas.width = crop.width
            canvas.height = crop.height
            ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height)
            setCroppedImage(canvas.toDataURL())
        }
    }

    const handleEnhancement = (newEnhancement) => {
        setEnhancement({ ...enhancement, ...newEnhancement })
    }

    const handleSaveAsImage = (imageSrc) => {
        const link = document.createElement('a')
        link.href = imageSrc
        link.download = 'document.jpg'
        link.click()
    }

    const handleSaveAsPDF = (imageSrc) => {
        const doc = new jsPDF()
        const img = new Image()
        img.src = imageSrc
        img.onload = () => {
            doc.addImage(img, 'JPEG', 10, 10, 180, 160)
            doc.save('document.pdf')
        }
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Document Scanner</h1>

            <CameraCapture onCapture={handleCapture} />

            {image && (
                <>
                    <CropImage imageSrc={image} onCropComplete={handleCropComplete} />

                    <ImageEnhancement onAdjust={handleEnhancement} />

                    <SavePanel
                        imageSrc={croppedImage || image}
                        onSaveAsPDF={handleSaveAsPDF}
                        onSaveAsImage={handleSaveAsImage}
                    />
                </>
            )}
        </div>
    )
}

export default DocumentScanner